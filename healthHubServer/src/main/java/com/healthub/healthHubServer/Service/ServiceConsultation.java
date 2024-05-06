package com.healthub.healthHubServer.Service;

import com.healthub.healthHubServer.DOA.Model.Consultation;
import com.healthub.healthHubServer.DOA.Model.Enum.ConsultationStatus;
import com.healthub.healthHubServer.DOA.Model.Medecin;
import com.healthub.healthHubServer.DOA.Repository.ConsultationRepository;
import com.healthub.healthHubServer.Service.Manager.ManagerConsultation;
import com.healthub.healthHubServer.Web.ControllerPatient;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Slf4j
@Service
public class ServiceConsultation implements ManagerConsultation {

    // Injection de consultation repository
    private final ConsultationRepository consultationRepository;

    public ServiceConsultation(ConsultationRepository consultationRepository) {
        this.consultationRepository = consultationRepository;
    }

    //  Logger
    private static final Logger logger = LoggerFactory.getLogger(ServiceConsultation.class);


    @Override
    public Optional<Consultation> setConsultation(Consultation consultation) {
        try {
            Optional<Consultation> consultationOptional = consultationRepository.findByIdAndDate(consultation.getId(), consultation.getDate());
            if (consultationOptional.isPresent()) {
                throw new Exception("Consultation impossible !!!");
            }
            consultationRepository.save(consultation);
            return Optional.of(consultation);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return Optional.empty();
        }
    }

    @Override
    public Optional<List<Consultation>> getAllConsultationsByDoc(Medecin medecin) {
        try {
            Optional<List<Consultation>> consultations = consultationRepository.findByMedecin(medecin);
            if (consultations.isPresent()) {
                return consultations;
            }
            throw new Exception("Can not get the list of consultation this doc!!!");
        } catch (Exception e) {
            logger.warn(e.getMessage());
            return Optional.empty();
        }
    }

    @Override
    public Optional<List<Consultation>> getConsultationPending(Medecin medecin) {
        try {
            Optional<List<Consultation>> consultations = consultationRepository.findByMedecinAndStatus(medecin, ConsultationStatus.PENDING);
            if (consultations.isPresent()) {
                return consultations;
            }
            throw new Exception("Error occur getting consultation!!!");
        } catch (Exception e) {
            logger.warn(e.getMessage());
            return Optional.empty();
        }
    }

    @Override
    public Optional<Consultation> removeConsultaionById(Medecin medecin, int consultationId) {
        try {
            Optional<Consultation> consultation = consultationRepository.findByIdAndMedecin(consultationId, medecin);
            if (consultation.isPresent()) {
                consultationRepository.delete(consultation.get());
                return consultation;
            }
            throw new Exception("Consultation can not be deleted");
        } catch (Exception e) {
            logger.warn(e.getMessage());
            return Optional.empty();
        }
    }
}
