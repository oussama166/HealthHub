package com.healthub.healthHubServer.Service;

import com.healthub.healthHubServer.DOA.Model.Avis;
import com.healthub.healthHubServer.DOA.Model.Enum.ConsultationStatus;
import com.healthub.healthHubServer.DOA.Model.Medecin;
import com.healthub.healthHubServer.DOA.Model.Patient;
import com.healthub.healthHubServer.DOA.Repository.AvisRepository;
import com.healthub.healthHubServer.DOA.Repository.ConsultationRepository;
import com.healthub.healthHubServer.DOA.Repository.MedecinRepository;
import com.healthub.healthHubServer.DOA.Repository.PatientRepository;
import com.healthub.healthHubServer.Service.Manager.ManagerAvis;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class ServiceAvis implements ManagerAvis {

    // Inject avis repo
    private final AvisRepository avisRepository;
    // Inject consultation repo
    private final ConsultationRepository consultationRepository;
    // Inject Patient repo
    private final PatientRepository patientRepository;
    //  Inject Doc repo
    private final MedecinRepository medecinRepository;

    // Logger
    private static final Logger logger = LoggerFactory.getLogger(ServiceAvis.class);


    public ServiceAvis(AvisRepository avisRepository, ConsultationRepository consultationRepository, PatientRepository patientRepository, MedecinRepository medecinRepository) {
        this.avisRepository = avisRepository;
        this.consultationRepository = consultationRepository;
        this.patientRepository = patientRepository;
        this.medecinRepository = medecinRepository;
    }

    private Optional<List<Object>> isPresent(int patientId, int docID) {
        Optional<Patient> patient = patientRepository.findById(patientId);
        Optional<Medecin> medecin = medecinRepository.findById(docID);
        List<Object> list = new ArrayList<>();
        if (patient.isEmpty() || medecin.isEmpty()) {
            return Optional.empty();
        }
        list.add(patient.get());
        list.add(medecin.get());
        return Optional.of(list);
    }

    @Override
    public Optional<Avis> setRating(int patientId, int docID, int avisId, int rating, String comment) {
        try {
            Optional<List<Object>> listObject = isPresent(patientId, docID);
            if (listObject.isPresent()) {
                List<?> list = listObject.get();
                Patient patient = (Patient) list.get(0);
                Medecin medecin = (Medecin) list.get(1);
                logger.info(patient.toString());
                logger.info(medecin.toString());
                // get the consultation status
                boolean consultations = consultationRepository.exitsConsultationPending(
                        patientId,
                        docID,
                        ConsultationStatus.DONE
                );
                if (!consultations) {
                    Avis avis = new Avis();
                    avis.setId(0);
                    avis.setCommentaire(comment);
                    avis.setNote(rating);
                    avis.setPatientAvis(patient);
                    avis.setMedecin(medecin);
                    avisRepository.save(avis);
                    logger.info(avis.toString());
                    return Optional.of(avis);
                }
                throw new Exception("Impossible to create avis about this doc !!!");
            }
            throw new Exception("Impossible to find patient of doc that you want to rate !!!");
        } catch (Exception e) {
            logger.warn(e.getMessage());
            return Optional.empty();
        }
    }

}
