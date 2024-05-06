package com.healthub.healthHubServer.DOA.Model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Dossier_Medicale {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    String Antecedent;
    String Allergies;
    String Traitement;

    @JsonBackReference
    @OneToOne
    @JoinColumn(name = "patient_id", referencedColumnName = "id")
    private Patient patientDossier;
}
