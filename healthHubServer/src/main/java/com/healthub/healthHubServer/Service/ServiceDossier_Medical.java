package com.healthub.healthHubServer.Service;

import com.healthub.healthHubServer.DOA.Model.Dossier_Medicale;
import com.healthub.healthHubServer.DOA.Repository.Dossier_MedicaleRepository;
import com.healthub.healthHubServer.Service.Manager.ManagerDossier_Medical;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Slf4j
@Service
public class ServiceDossier_Medical implements ManagerDossier_Medical {


    // INJECT REPOS DOSSIER MEDICAL

    private final Dossier_MedicaleRepository dossierMedicaleRepository;

    public ServiceDossier_Medical(Dossier_MedicaleRepository dossierMedicaleRepository) {
        this.dossierMedicaleRepository = dossierMedicaleRepository;
    }

    // Logger
    private final static Logger logger = LoggerFactory.getLogger(ServiceDossier_Medical.class);


    @Override
    public Optional<Dossier_Medicale> setDossierMedical(Dossier_Medicale dossierMedical) {
        try {
            Optional<Dossier_Medicale> dossierMedicale = dossierMedicaleRepository.findByIdAndPatientDossier_Id(dossierMedical.getId(), dossierMedical.getPatientDossier().getId());
            if (dossierMedicale.isPresent()) {
                throw new Exception("This patient have already one medical file!!!");
            }
            dossierMedicaleRepository.save(dossierMedical);
            return Optional.of(dossierMedical);
        } catch (Exception e) {
            logger.warn(e.getMessage());
            return Optional.empty();
        }
    }

    @Override
    public Optional<Dossier_Medicale> setAllergicMedical(int dossierId, String allergicMedical) {
        try {
            Optional<Dossier_Medicale> dossierMedicale = dossierMedicaleRepository.findById(dossierId);
            if (dossierMedicale.isPresent()) {
                dossierMedicale.get().setAllergies(allergicMedical);
                return dossierMedicale;
            }
            throw new Exception("This patient has not any medical file to set allergic !!!");
        } catch (Exception e) {
            logger.warn(e.getMessage());
            return Optional.empty();
        }
    }

    @Override
    public Optional<Dossier_Medicale> setAntecedentMedical(int dossierId, String antecedentMedical) {
        try {
            Optional<Dossier_Medicale> dossierMedicale = dossierMedicaleRepository.findById(dossierId);
            if (dossierMedicale.isPresent()) {
                dossierMedicale.get().setAntecedent(antecedentMedical);
                logger.info(dossierMedicale.get().toString());
                return dossierMedicale;
            }
            throw new Exception("This patient has not any medical file to set antecedent !!!");
        } catch (Exception e) {
            logger.warn(e.getMessage());
            return Optional.empty();
        }
    }

    @Override
    public Optional<Dossier_Medicale> setTretementMedical(
            int dossierId,
            String treatmentMedical
    ) {
        try {
            Optional<Dossier_Medicale> dossierMedicale = dossierMedicaleRepository.findById(dossierId);
            if (dossierMedicale.isPresent()) {
                dossierMedicale.get().setTraitement(treatmentMedical);
                logger.info(dossierMedicale.get().toString());
                return dossierMedicale;
            }
            throw new Exception("This patient has not any medical file to set treatment !!!");
        } catch (Exception e) {
            logger.warn(e.getMessage());
            return Optional.empty();
        }
    }

    @Override
    public Optional<Dossier_Medicale> getDossier_Medical(int patientID) {
        return dossierMedicaleRepository.findByPatientDossier_Id(patientID);
    }

    @Override
    public Optional<Dossier_Medicale> getDossierByIdDossier(int dossierId) {
        return dossierMedicaleRepository.findById(dossierId);
    }

    @Override
    public Optional<Dossier_Medicale> updateDossier(Dossier_Medicale dossierMedical) {
        try {
            Optional<Dossier_Medicale> dossierMedicaleOptional = dossierMedicaleRepository.findById(dossierMedical.getId());
            if (dossierMedicaleOptional.isPresent()) {
                Dossier_Medicale existingDossier = dossierMedicaleOptional.get();
                // Update the existing dossier with new data
                existingDossier.setPatientDossier(dossierMedical.getPatientDossier());
                existingDossier.setAllergies(dossierMedical.getAllergies());
                existingDossier.setAntecedent(dossierMedical.getAntecedent());
                existingDossier.setTraitement(dossierMedical.getTraitement());
                // Save the updated dossier
                Dossier_Medicale updatedDossier = dossierMedicaleRepository.save(existingDossier);
                return Optional.of(updatedDossier);
            } else {
                // If the dossier with the given id does not exist
                return Optional.empty();
            }
        } catch (Exception e) {
            // Handle exceptions, log, or return appropriate responses
            logger.warn("Error occurred while updating dossier: {}", e.getMessage());
            return Optional.empty();
        }
    }


    @Override
    public Optional<Dossier_Medicale> removeDossier(int dossierId) {
        try {
            Optional<Dossier_Medicale> dossierMedicale = dossierMedicaleRepository.findById(dossierId);
            if (dossierMedicale.isPresent()) {
                dossierMedicaleRepository.deleteById(dossierId);
                return dossierMedicale;

            }
            throw new Exception("We can not delete the dossier in id : " + dossierId);
        } catch (Exception e) {
            logger.warn("Error occurred while trying to remove dossier by id : {}", e.getMessage());
            return Optional.empty();
        }
    }

    @Override
    public Optional<Long> removeDossierByIdPatient(int patientId) {
        try {
            Optional<Dossier_Medicale> dossierMedicale = dossierMedicaleRepository.findByPatientDossier_Id(patientId);
            if (dossierMedicale.isPresent()) {
                return Optional.of(dossierMedicaleRepository.deleteByPatientDossier_Id(patientId));

            }
            throw new Exception("We can not delete the dossier in id : " + patientId);
        } catch (Exception e) {
            logger.warn("Error occurred while trying to remove dossier by patient id : {}", e.getMessage());
            return Optional.empty();
        }
    }
}
