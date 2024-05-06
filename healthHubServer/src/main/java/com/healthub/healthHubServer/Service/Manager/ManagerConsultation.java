package com.healthub.healthHubServer.Service.Manager;

import com.healthub.healthHubServer.DOA.Model.Consultation;
import com.healthub.healthHubServer.DOA.Model.Medecin;
import org.apache.tomcat.util.http.parser.MediaTypeCache;

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
            Medecin medecin
    );

    Optional<Consultation> removeConsultaionById(
            Medecin medecin,
            int consultationId
    );
}
