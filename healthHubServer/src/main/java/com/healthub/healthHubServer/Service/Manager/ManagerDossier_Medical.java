package com.healthub.healthHubServer.Service.Manager;

import com.healthub.healthHubServer.DOA.Model.Dossier_Medicale;

import java.util.Optional;

public interface ManagerDossier_Medical {
    //    CREATE
    Optional<Dossier_Medicale> setDossierMedical(
            Dossier_Medicale dossierMedical
    );

    Optional<Dossier_Medicale> setAllergicMedical(
            int dossierId,
            String allergicMedical
    );

    Optional<Dossier_Medicale> setAntecedentMedical(
            int dossierId,
            String antecedentMedical
    );

    Optional<Dossier_Medicale> setTretementMedical(
            int dossierId,
            String treatmentMedical
    );

    //    SELECT
    Optional<Dossier_Medicale> getDossier_Medical(
            int patientID
    );

    Optional<Dossier_Medicale> getDossierByIdDossier(
            int dossierId
    );

    //    MODIFIED
    Optional<Dossier_Medicale> updateDossier(
            Dossier_Medicale dossierMedical
    );

    //    REMOVE
    Optional<Dossier_Medicale> removeDossier(
            int dossierId
    );

    Optional<Long> removeDossierByIdPatient(
            int patientId
    );
}
