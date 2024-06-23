package com.healthub.healthHubServer.Web;

import com.healthub.healthHubServer.DOA.Model.Patient;
import com.healthub.healthHubServer.Service.Manager.ManagerDossier_Medical;
import com.healthub.healthHubServer.Service.Manager.ManagerPatient;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Slf4j
@Controller
@RequestMapping("/api/v1")
@CrossOrigin(
        value = "http://localhost:5173/"
)
public class ControllerPatient {

    //  Inject the patient manager into the controller
    private final ManagerPatient managerPatient;
    private final ManagerDossier_Medical managerDossier_Medical;


    //  To log the result in terminal
    private static final Logger logger = LoggerFactory.getLogger(ControllerPatient.class);

    public ControllerPatient(ManagerPatient managerPatient, ManagerDossier_Medical managerDossier_Medical) {
        this.managerPatient = managerPatient;
        this.managerDossier_Medical = managerDossier_Medical;
    }

    // ========== CREATE ========= //
    @PostMapping(
            path = "/createPatient",
            consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.ALL_VALUE},
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<?> createPatient(@RequestBody Patient patient) {
        try {
            Optional<Patient> patientInfo = managerPatient.createPatient(patient);
            if (patientInfo.isPresent()) {
                logger.info("Patient created successfully with email: " + patientInfo.get());
                return ResponseEntity.status(HttpStatus.OK).body(patientInfo);
            } else {
                throw new Exception("Patient creation failed or returned null.");
            }
        } catch (Exception e) {
            logger.error("Error creating patient", e);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
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
            logger.info(name);
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
    @PostMapping(
            path = "/updatePatient",
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
            path = "/deletePatient/{idUser}",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<?> deletePatient(
            @PathVariable("idUser") int id
    ) {
        try {
            Optional<Patient> patient = managerPatient.removePatient(id);
            if (patient.isPresent()) {
                return ResponseEntity.status(200).body(patient.get());
            }
            throw new Exception("User can not deleted !!!");
        } catch (Exception e) {
            logger.warn(e.getMessage());
            return ResponseEntity.status(400).body(e.getMessage());
        }
    }


}
