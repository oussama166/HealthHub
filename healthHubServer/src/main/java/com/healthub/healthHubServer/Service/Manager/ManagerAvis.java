package com.healthub.healthHubServer.Service.Manager;

import com.healthub.healthHubServer.DOA.Model.Avis;

import java.util.Optional;

public interface ManagerAvis {
    Optional<Avis> setRating(
            int patientId,
            int docID,
            int avisId,
            int rating,
            String comment
    );
}
