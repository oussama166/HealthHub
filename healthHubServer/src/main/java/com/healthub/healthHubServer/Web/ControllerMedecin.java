package com.healthub.healthHubServer.Web;

import com.healthub.healthHubServer.DOA.Model.Medecin;
import com.healthub.healthHubServer.Service.Manager.ManagerMedecin;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Slf4j
@Controller
@RequestMapping("/api/v1")
@CrossOrigin(
        value = "http://localhost:5173/"
)
public class ControllerMedecin {

    // Inject the manager medecin
    private final ManagerMedecin managerMedecin;
    //  To log the result in terminal
    private static final Logger logger = LoggerFactory.getLogger(ControllerMedecin.class);

    public ControllerMedecin(ManagerMedecin medecin) {
        this.managerMedecin = medecin;
    }

    // ========== CREATE ========= //
    @PostMapping(
            path = "/createDoc",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<?> createMedecin(
            @RequestBody Medecin medecin
    ) {
        try{
            Optional<Medecin> result = managerMedecin.createMedecin(medecin);
            if(result.isPresent()) {
                return ResponseEntity.ok(result.get());
            }
            throw new Exception("Can not be created !!!");
        }catch  (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }


    }

    // ========== SELECT ========= //
    @GetMapping(
            path = "/getDocs",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<?> getMedecins(
    ) {
        try {
            Optional<List<Medecin>> medecins = managerMedecin.getMedecins();
            if (medecins.isPresent()) {
                return ResponseEntity.status(200).body(medecins);
            }
            throw new Exception("Can not get all the docs");
        } catch (Exception e) {
            logger.warn(e.getMessage());
            return ResponseEntity.status(400).body(e.getMessage());
        }
    }

    @PostMapping(
            path = "/getDoc",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<?> getDoc(
            @RequestBody Medecin medecin
    ) {
        try {
            Optional<List<Medecin>> medecinList = managerMedecin.getMedecin(medecin);
            if (medecinList.isPresent()) {
                return ResponseEntity.status(200).body(medecinList.get());
            }
            throw new Exception("Can not find the doc!!!");
        } catch (Exception e) {
            return ResponseEntity.status(400).body(e.getMessage());
        }
    }

    @GetMapping(
            path = "/getDoc/{name}",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<?> getDoc(
            @PathVariable("name") String name
    ) {
        try {
            Optional<List<Medecin>> medecins = managerMedecin.getMedecin(name);
            if (medecins.isPresent()) {
                return ResponseEntity.status(200).body(medecins.get());
            }
            throw new Exception("Doc can not be get by the name that you set");
        } catch (Exception e) {
            logger.warn(e.getMessage());
            return ResponseEntity.status(400).body(e.getMessage());
        }
    }

    // ========== UPDATE ========= //
    @PostMapping(
            path = "/updateDoc",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<?> updateDocInfo(
            @RequestBody Medecin medecin
    ) {
        try {
            Optional<Medecin> medecinOptional = managerMedecin.updateMedecin(medecin);
            if (medecinOptional.isPresent()) {
                return ResponseEntity.status(200).body(medecinOptional.get());
            }
            throw new Exception("This doc info can not be modified !!!");
        } catch (Exception e) {
            logger.warn(e.getMessage());
            return ResponseEntity.status(400).body(e.getMessage());
        }

    }

    // ========== DELETE ========= //
    @DeleteMapping(
            path = "/removeDocById/{docId}",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<?> removeDocById(
            @PathVariable("docId") int docId
    ) {
        try {
            Optional<Medecin> medecin = managerMedecin.removeMedecin(docId);
            if (medecin.isPresent()) {
                return ResponseEntity.status(200).body(medecin);
            }
            throw new Exception("Doc can not be deleted by the docId : " + docId);
        } catch (Exception e) {
            logger.warn(e.getMessage());
            return ResponseEntity.status(400).body(e.getMessage());
        }
    }

    @DeleteMapping(
            path = "/removeDocByUsername/{username}",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<?> removeDocByUsername(
            @PathVariable("username") String username
    ) {
        try {
            Optional<Medecin> medecin = managerMedecin.removeMedecin(username);
            if (medecin.isPresent()) {
                return ResponseEntity.status(200).body(medecin);
            }
            throw new Exception("Doc can not be deleted by the username : " + username);
        } catch (Exception e) {
            logger.warn(e.getMessage());
            return ResponseEntity.status(400).body(e.getMessage());
        }
    }

}
