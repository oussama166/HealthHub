package com.healthub.healthHubServer.Service;

import com.healthub.healthHubServer.DOA.Model.Dossier_Medicale;
import com.healthub.healthHubServer.DOA.Model.Patient;
import com.healthub.healthHubServer.DOA.Repository.Dossier_MedicaleRepository;
import com.healthub.healthHubServer.DOA.Repository.PatientRepository;
import com.healthub.healthHubServer.Service.Manager.ManagerPatient;
import com.healthub.healthHubServer.Web.ControllerPatient;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Slf4j
@Service
public class ServicePatient implements ManagerPatient {

    // Injection of Patient repository
    private final PatientRepository patientRepository;
    // Injection of Dossier Medical repository
    private final Dossier_MedicaleRepository dossier_MedicaleRepository;

    private static final Logger logger = LoggerFactory.getLogger(ServicePatient.class);

    public ServicePatient(
            PatientRepository patientRepository,
            Dossier_MedicaleRepository dossierMedicaleRepository
    ) {
        this.patientRepository = patientRepository;
        dossier_MedicaleRepository = dossierMedicaleRepository;
    }

    // ========== CREATE ========= //
    @Override
    public Optional<Patient> createPatient(Patient patient) {
        try {
            Optional<Patient> patientInfo = patientRepository.findByAll(patient);
            if (patientInfo.isPresent()) {
                throw new Exception("We cannot create Patient already exist!!!");
            }

            // Save the patient
            patientRepository.save(patient);

            Dossier_Medicale dossierMedicale = new Dossier_Medicale();
            dossierMedicale.setTraitement(patient.getDossier_medicale().getTraitement());
            dossierMedicale.setAntecedent(patient.getDossier_medicale().getAntecedent());
            dossierMedicale.setAllergies(patient.getDossier_medicale().getAllergies());
            dossierMedicale.setPatientDossier(patientRepository.findByName(patient.getUserName()).get());


            dossier_MedicaleRepository.save(dossierMedicale);


            return Optional.of(patient);

        } catch (Exception e) {
            logger.warn(e.getMessage());
            return Optional.empty();
        }
    }


    // ========== SELECT ========= //
    @Override
    public Optional<Patient> getPatient(int id) {
        return patientRepository.findById(id);
    }

    @Override
    public Optional<Patient> getPatient(String username) {
        return patientRepository.findByName(username);
    }

    // ========== UPDATE ========= //
    @Override
    public Optional<Patient> updatePatient(Patient patient) {
        try {
            Optional<Patient> patientInfo = getPatient(patient.getId());
            if (patientInfo.isPresent()) {
                patientInfo.get().setConsultations(patient.getConsultations());
                patientInfo.get().setUserName(patient.getUserName());
                patientInfo.get().setEmail(patient.getEmail());
                patientInfo.get().setPassword(patient.getPassword());
                patientRepository.save(patientInfo.get());
                return patientInfo;
            }
            throw new Exception("Patient can not be modified info!!!");
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return Optional.empty();
        }
    }

    // ========== REMOVE ========= //
    @Override
    public Optional<Patient> removePatient(int id) {
        try {
            Optional<Patient> patientInfo = getPatient(id);
            if (patientInfo.isPresent()) {
                patientRepository.delete(patientInfo.get());
                return patientInfo;
            }
            throw new Exception("Patient can not be deleted !!!");
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return Optional.empty();
        }
    }
}
