package com.healthub.healthHubServer.Service.Manager;

import com.healthub.healthHubServer.DOA.Model.Consultation;
import com.healthub.healthHubServer.DOA.Model.Medecin;
import com.healthub.healthHubServer.DOA.Model.Patient;
import org.apache.tomcat.util.http.parser.MediaTypeCache;

import java.util.Date;
import java.util.List;
import java.util.Optional;

public interface ManagerConsultation {
    Optional<Consultation> setConsultation(
            Consultation consultation
    );

    Optional<List<Consultation>> getAllConsultationsByDoc(
            Medecin medecin
    );

    Optional<List<Consultation>> getConsultationPending(
            Medecin medecin,
            Date dateConsultations
    );

    Optional<List<Consultation>> getConsultationDone(
            Medecin medecin,
            Date dateConsultations
    );

    Optional<List<Consultation>> getConsultationRejected(
            Medecin medecin,
            Date dateConsultations
    );

    Optional<Consultation> getConsultation(
            Medecin medecin,
            Patient patientId,
            Date consultationDate
    );

    Optional<Consultation> removeConsultaionById(
            Medecin medecin,
            int consultationId
    );
}
