package com.healthub.healthHubServer.Web;

import com.healthub.healthHubServer.DOA.Repository.MedecinRepository;
import com.healthub.healthHubServer.DOA.Repository.PatientRepository;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Builder;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Slf4j
@Controller
@RequestMapping("/api/v1")
@CrossOrigin(
        value = "http://localhost:5173/"
)
@Validated
public class ControllerConnection {
    private static final Logger logger = LoggerFactory.getLogger(ControllerConnection.class);

    private final PatientRepository patientRepository;
    private final MedecinRepository medecinRepository;

    public ControllerConnection(PatientRepository patientRepository, MedecinRepository medecinRepository) {
        this.patientRepository = patientRepository;
        this.medecinRepository = medecinRepository;
    }

    @Data
    @Builder
    public static class ConnectRequest {
        @NotBlank(message = "Email is mandatory")
        @Email(message = "Email should be valid")
        private String email;

        @NotBlank(message = "Password is mandatory")
        private String password;

        private Boolean isDoctor = false;
    }

    @PostMapping(
            value = "/connect",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<?> connectMedecin(
            @Valid @RequestBody ConnectRequest connectRequest
    ) {
        logger.info("Email: {}", connectRequest.getEmail());
        logger.info("Password: {}", connectRequest.getPassword());

        // Example authentication logic (replace with your actual authentication logic)
        if (authenticate(connectRequest.getEmail(), connectRequest.getPassword(), connectRequest.getIsDoctor())) {
            String role = connectRequest.getIsDoctor() ? "Doctor" : "Patient";
            return ResponseEntity.ok("Welcome, " + role);
        } else {
            return ResponseEntity.status(401).body("Authentication failed");
        }
    }

    private boolean authenticate(String email, String password, Boolean isDoc) {
        if (isDoc) {
            return medecinRepository.connectMed(email, password);
        }
        return patientRepository.connectPatient(email, password);

    }
}
