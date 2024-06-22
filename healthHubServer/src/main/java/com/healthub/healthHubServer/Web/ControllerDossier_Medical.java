package com.healthub.healthHubServer.Web;

import com.healthub.healthHubServer.DOA.Model.Dossier_Medicale;
import com.healthub.healthHubServer.DOA.Repository.Dossier_MedicaleRepository;
import com.healthub.healthHubServer.Service.Manager.ManagerDossier_Medical;
import lombok.extern.slf4j.Slf4j;
import org.apache.coyote.Response;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.xml.crypto.dsig.dom.DOMSignContext;
import java.util.Optional;

@Slf4j
@Controller
@RequestMapping("/api/v1")
@CrossOrigin(
        value = "http://localhost:5173/"
)
public class ControllerDossier_Medical {

    // INJECTION OF MANGER DOSSIER MEDICAL
    private final ManagerDossier_Medical managerDossierMedical;
    private final Dossier_MedicaleRepository dossier_MedicaleRepository;

    public ControllerDossier_Medical(ManagerDossier_Medical managerDossierMedical, Dossier_MedicaleRepository dossier_MedicaleRepository) {
        this.managerDossierMedical = managerDossierMedical;
        this.dossier_MedicaleRepository = dossier_MedicaleRepository;
    }

    // LOGGER
    private static final Logger logger = LoggerFactory.getLogger(ControllerDossier_Medical.class);

    @PostMapping(
            path = "/setDossierMedical",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<?> setDossierMedical(
            @RequestBody Dossier_Medicale dossierMedical
    ) {
        try {
            Optional<Dossier_Medicale> dossierMedicale = managerDossierMedical.setDossierMedical(dossierMedical);
            if (dossierMedicale.isPresent()) {
                return ResponseEntity.status(200).body(dossierMedicale);
            }
            throw new Exception("Error occur in creation of medical file");
        } catch (Exception e) {
            logger.warn("Error occur in creation of medical file : {}", e.getMessage());
            return ResponseEntity.status(400).body(e.getMessage());
        }
    }

    @PostMapping(
            path = "/setAlergicMedical/{alergic},{dossierId}",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<?> setAlergicMedical(
            @PathVariable("dossierId") int dossierId,
            @PathVariable("alergic") String alergic
    ) {
        try {
            Optional<Dossier_Medicale> dossierMedicale = managerDossierMedical.setAllergicMedical(dossierId, alergic);
            if (dossierMedicale.isPresent()) {
                return ResponseEntity.status(200).body(dossierMedicale.get());
            }
            throw new Exception("Can not set allergic info at file medical !!!");
        } catch (Exception e) {
            logger.warn("Error occur in set allergic info at {} error is : {}", dossierId, e.getMessage());
            return ResponseEntity.status(400).body(e.getMessage());
        }
    }

    @PostMapping(
            path = "/setAnticidentMedcial/{anticedent},{dossierId}",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<?> setAnticidentMedical(
            @PathVariable("anticedent") String anticident,
            @PathVariable("dossierId") int dossierId
    ) {
        try {
            Optional<Dossier_Medicale> dossierMedicale = managerDossierMedical.setAntecedentMedical(dossierId, anticident);
            if (dossierMedicale.isPresent()) {
                return ResponseEntity.status(200).body(dossierMedicale.get());
            }
            throw new Exception("We can not find the medical file !!!");
        } catch (Exception e) {
            logger.warn(e.getMessage());
            return ResponseEntity.status(400).body(e.getMessage());
        }
    }

    @PostMapping(
            path = "/setTretementMedcial/{treatmentMedical},{dossierId}",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<?> setTreatmentMedicalMedical(
            @PathVariable("treatmentMedical") String treatmentMedical,
            @PathVariable("dossierId") int dossierId
    ) {
        try {
            Optional<Dossier_Medicale> dossierMedicale = managerDossierMedical.setTretementMedical(dossierId, treatmentMedical);
            if (dossierMedicale.isPresent()) {
                return ResponseEntity.status(200).body(dossierMedicale.get());
            }
            throw new Exception("We can not find the medical file !!!");
        } catch (Exception e) {
            logger.warn(e.getMessage());
            return ResponseEntity.status(400).body(e.getMessage());
        }
    }

    @GetMapping(
            path = "/getDossierMedical/{patientId}",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<?> getDossierMedical(
            @PathVariable("patientId") int patientId
    ) {
        try {
            Optional<Dossier_Medicale> dossierMedicale = managerDossierMedical.getDossier_Medical(patientId);
            if (dossierMedicale.isPresent()) {
                return ResponseEntity.status(200).body(dossierMedicale.get());
            }
            throw new Exception("Can not get the medical file of this patient !!!");
        } catch (Exception e) {
            logger.warn(e.getMessage());
            return ResponseEntity.status(400).body(e.getMessage());
        }
    }

    @GetMapping(
            path = "/getDossierByIdDossier/{dossierId}",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<?> getDossierByIdDossier(
            @PathVariable("dossierId") int dosserId
    ) {
        try {
            Optional<Dossier_Medicale> dossierMedicale = managerDossierMedical.getDossierByIdDossier(dosserId);
            if (dossierMedicale.isPresent()) {
                return ResponseEntity.status(200).body(dossierMedicale.get());
            }
            throw new Exception("We can not get this medical file");
        } catch (Exception e) {
            logger.warn(e.getMessage());
            return ResponseEntity.status(400).body(e.getMessage());
        }
    }

    @PutMapping(
            path = "/updateDossier",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<?> updateDossier(
            @RequestBody Dossier_Medicale dossierMedicale
    ) {
        try {
            Optional<Dossier_Medicale> dossier_medicale = managerDossierMedical.updateDossier(dossierMedicale);
            if (dossier_medicale.isPresent()) {
                return ResponseEntity.status(200).body(dossier_medicale.get());
            }
            throw new Exception("We can not modified this medical file !!!");
        } catch (Exception e) {
            logger.warn(e.getMessage());
            return ResponseEntity.status(400).body(e.getMessage());
        }
    }

    @DeleteMapping(
            path = "/removeDossier/{dossierId}",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<?> removeDossier(
            @PathVariable("dossierId") int dossierId
    ) {
        try {
            Optional<Dossier_Medicale> dossierMedicale = managerDossierMedical.removeDossier(dossierId);
            if (dossierMedicale.isPresent()) {
                return ResponseEntity.status(200).body(dossierMedicale.get());
            }
            throw new Exception("We can not delete this medical file !!!");
        } catch (Exception e) {
            logger.warn(e.getMessage());
            return ResponseEntity.status(400).body(e.getMessage());
        }
    }

    @DeleteMapping(
            path = "/removeDossierByIdPatient/{idPatient}",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<?> removeDossierByIdPatient(
            @PathVariable("idPatient") int patientId
    ) {
        try {
            Optional<Long> isDeleted = managerDossierMedical.removeDossierByIdPatient(patientId);
            if (isDeleted.isPresent()) {
                return ResponseEntity.status(200).body(isDeleted.get());
            }
            throw new Exception("Can not delete this medical file");
        } catch (Exception e) {
            logger.warn(e.getMessage());
            return ResponseEntity.status(400).body(e.getMessage());
        }
    }
}
