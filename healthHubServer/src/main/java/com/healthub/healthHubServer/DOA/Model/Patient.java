package com.healthub.healthHubServer.DOA.Model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    String userName;
    @Column(
            unique = true
    )
    String email;
    String password;
    @JsonManagedReference
    @OneToOne(mappedBy = "patientDossier", cascade = CascadeType.ALL)
    private Dossier_Medicale dossier_medicale;

    @JsonManagedReference
    @OneToMany(mappedBy = "patientConsulatation", cascade = CascadeType.ALL)
    private List<Consultation> consultations;

    @JsonManagedReference
    @OneToMany(mappedBy = "patientAvis", cascade = CascadeType.ALL)
    private List<Avis> avis;

}
