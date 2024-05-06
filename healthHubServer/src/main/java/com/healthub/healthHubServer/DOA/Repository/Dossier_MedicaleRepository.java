package com.healthub.healthHubServer.DOA.Repository;

import com.healthub.healthHubServer.DOA.Model.Dossier_Medicale;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface Dossier_MedicaleRepository extends JpaRepository<Dossier_Medicale, Integer> {
    Optional<Dossier_Medicale> findByIdAndPatientDossier_Id(int id, int id1);

    Optional<Dossier_Medicale> findByPatientDossier_Id(int id);

    long deleteByPatientDossier_Id(int id);
}
