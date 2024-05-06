package com.healthub.healthHubServer.DOA.Model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
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
