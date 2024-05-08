package com.healthub.healthHubServer.Config;

import com.healthub.healthHubServer.DOA.Model.Patient;
import com.healthub.healthHubServer.DOA.Repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
public class PatientDetailService implements UserDetailsService {
    @Autowired
    private PatientRepository patientRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<Patient> patient = patientRepository.findByName(username);
        if (patient == null) {
            throw new UsernameNotFoundException("Médecin non trouvé avec le nom d'utilisateur: " + username);
        }
        return org.springframework.security.core.userdetails.User
                .withUsername(patient.get().getUserName())
                .password(patient.get().getPassword()) // Le mot de passe doit déjà être encodé (par exemple, avec BCrypt)
                .roles("PATIENT") // Assignez les rôles du médecin, par exemple, "MEDECIN"
                .build();
    }
}
