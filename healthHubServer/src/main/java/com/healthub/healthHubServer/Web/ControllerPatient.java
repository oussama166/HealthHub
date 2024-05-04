package com.healthub.healthHubServer.Web;

import com.healthub.healthHubServer.DOA.Model.Patient;
import com.healthub.healthHubServer.Service.Manager.ManagerPatient;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Slf4j
@Controller
@RequestMapping("/api/v1")
@CrossOrigin(
        value = "http://localhost:4200/"
)
public class ControllerPatient {

    //  Inject the patient manager into the controller
    private final ManagerPatient managerPatient;

    //  To log the result in terminal
    private static final Logger logger = LoggerFactory.getLogger(ControllerPatient.class);

    public ControllerPatient(ManagerPatient managerPatient) {
        this.managerPatient = managerPatient;
    }

    // ========== CREATE ========= //
    @PostMapping(
            path = "/createPatient",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<?> createPatient(
            @RequestBody Patient patient
    ) {
        try {
            Optional<Patient> patientInfo = managerPatient.createPatient(patient);
            if (patientInfo.isPresent()) {
                return ResponseEntity.status(200).body(patientInfo);
            }
            throw new Exception("Patient can not created!!!");
        } catch (Exception e) {
            logger.warn(e.getMessage());
            return ResponseEntity.status(400).body(e.getMessage());
        }
    }

    // ========== SELECT ========= //
    @GetMapping(
            path = "/getPatient/{name}",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<?> getPatient(
            @PathVariable("name") String name
    ) {
        try {
            Optional<Patient> patient = managerPatient.getPatient(name);
            if (patient.isPresent()) {
                return ResponseEntity.status(200).body(patient);
            }
            throw new Exception("Patient not found!!!");
        } catch (Exception e) {
            logger.warn(e.getMessage());
            return ResponseEntity.status(400).body(e.getMessage());
        }
    }

    // ========== UPDATE ========= //
    @GetMapping(
            path="/updatePatient",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<?> updatePatient(
            @RequestBody Patient patient
    ) {
        try {
            Optional<Patient> patientInfo = managerPatient.updatePatient(patient);
            if (patientInfo.isPresent()) {
                return ResponseEntity.status(200).body(patientInfo.get());
            }
            throw new Exception("Patient info not modified !!!");
        } catch (Exception e) {
            logger.warn(e.getMessage());
            return ResponseEntity.status(400).body(e.getMessage());
        }

    }

    // ========== DELETE ========= //
    @DeleteMapping(
            path="/deletePatient/{idUser}",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<?> deletePatient(
           @PathVariable("idUser") int id
    ){
        try {
            Optional<Patient> patient = managerPatient.removePatient(id);
            if(patient.isPresent()){
                return ResponseEntity.status(200).body(patient.get());
            }
            throw new Exception("User can not deleted !!!");
        }catch (Exception e){
            logger.warn(e.getMessage());
            return ResponseEntity.status(400).body(e.getMessage());
        }
    }


}
