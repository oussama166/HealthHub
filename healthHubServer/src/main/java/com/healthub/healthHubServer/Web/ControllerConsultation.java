package com.healthub.healthHubServer.Web;

import com.healthub.healthHubServer.DOA.Model.Consultation;
import com.healthub.healthHubServer.DOA.Model.Medecin;
import com.healthub.healthHubServer.Service.Manager.ManagerConsultation;
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
        value = "http://localhost:4200/"
)
public class ControllerConsultation {

    // Inject manger Consultation
    private final ManagerConsultation consultationManager;

    public ControllerConsultation(ManagerConsultation consultationManager) {
        this.consultationManager = consultationManager;
    }

    // Logger
    private static final Logger logger = LoggerFactory.getLogger(ControllerConsultation.class);

    // =========== CREATE =========== //
    @PostMapping(
            path = "/setConsultation",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<?> SetConsultation(
            @RequestBody Consultation consultation
    ) {
        try {
            Optional<Consultation> consultationOptional = consultationManager.setConsultation(consultation);
            if (consultationOptional.isPresent()) {
                return ResponseEntity.status(200).body(consultation);
            }
            throw new Exception("we can not create this consultation");
        } catch (Exception e) {
            logger.warn(e.getMessage());
            return ResponseEntity.status(400).body(e.getMessage());
        }
    }

    // =========== SELECT =========== //

    @GetMapping(
            value = "/getAllConsultation",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<?> getAllConsultationByDoc(
            @RequestBody Medecin medecin
    ) {
        try {
            Optional<List<Consultation>> list = consultationManager.getAllConsultationsByDoc(medecin);
            if (list.isPresent()) {
                return ResponseEntity.status(200).body(list.get());
            }
            throw new Exception("This Doc null consultation !!!");
        } catch (Exception e) {
            logger.warn(e.getMessage());
            return ResponseEntity.status(400).body(e.getMessage());
        }
    }

    @GetMapping(
            path = "/getConsultationPending",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<?> getConsultationPending(
            @RequestBody Medecin medecin
    ) {
        try {
            Optional<List<Consultation>> list = consultationManager.getConsultationPending(medecin);
            if (list.isPresent()) {
                return ResponseEntity.status(200).body(list.get());
            }
            throw new Exception("This Doc hasn't any pending consultation !!!");
        } catch (Exception e) {
            logger.warn(e.getMessage());
            return ResponseEntity.status(400).body(e.getMessage());
        }
    }

    @GetMapping(
            path = "/removeConsultation",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<?> removeConsultation(
            @RequestBody Medecin medecin,
            @RequestBody int consultationId
    ) {
        try {
            Optional<Consultation> consultationOptional = consultationManager.removeConsultaionById(medecin, consultationId);
            if (consultationOptional.isPresent()) {
                logger.info(consultationOptional.get().toString());
                return ResponseEntity.status(200).body(consultationOptional.get());
            }
            throw new Exception("This Consultation has some issue !!!");
        } catch (Exception e) {
            logger.warn(e.getMessage());
            return ResponseEntity.status(400).body(e.getMessage());
        }

    }


}
