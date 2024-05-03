package com.healthub.healthHubServer.api.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
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
public class Medecin extends User{
    String MapsUrl;
    @OneToMany(mappedBy = "medecin")
    private List<Consultation> consultations;
    @OneToMany(mappedBy = "medecin")
    private List<Specialite> Specialites;
    @OneToMany(mappedBy = "medecin")
    private List<Avis> avis;
}
