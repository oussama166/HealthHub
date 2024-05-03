package com.healthub.healthHubServer.api.Model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
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
public class Patient extends User {
    @OneToOne(mappedBy = "patient", cascade = CascadeType.ALL)
    private Dossier_Medicale dossier_medicale;
    @OneToMany(mappedBy = "patient")
    private List<Consultation> consultations;
}
