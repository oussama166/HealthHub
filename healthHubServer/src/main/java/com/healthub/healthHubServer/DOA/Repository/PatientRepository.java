package com.healthub.healthHubServer.DOA.Repository;

import com.healthub.healthHubServer.DOA.Model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface PatientRepository extends JpaRepository<Patient, Integer> {
    @Query(
            value="SELECT pt FROM Patient pt WHERE pt. = ?1"
    )
    Optional<Patient> findByAll(Patient patient);
    @Query(
            value="SELECT pt FROM Patient pt WHERE pt.userName LIKE ?1"
    )
    Optional<Patient> findByName(String username);
}
