package com.healthub.healthHubServer.DOA.Repository;

import com.healthub.healthHubServer.DOA.Model.Dossier_Medicale;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Dossier_MedicalRepository extends JpaRepository<Dossier_Medicale,Integer> {
}
