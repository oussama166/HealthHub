package com.healthub.healthHubServer.Service.Manager;

import com.healthub.healthHubServer.DOA.Model.Patient;

import java.util.Optional;

public interface ManagerPatient {
    // ========== CREATE ========= //
    Optional<Patient> createPatient(Patient patient);
    // ========== SELECT ========= //
    Optional<Patient> getPatient(int id);
    Optional<Patient> getPatient(String username);
    // ========== UPDATE ========= //
    Optional<Patient> updatePatient(Patient patient);
    // ========== DELETE ========= //
    Optional<Patient> removePatient(int id);
}
