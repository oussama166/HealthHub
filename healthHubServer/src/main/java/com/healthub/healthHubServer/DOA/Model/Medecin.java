package com.healthub.healthHubServer.DOA.Model;

import com.healthub.healthHubServer.DOA.Model.Enum.MedicalSpecialty;
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
public class Medecin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    String name;
    @Column(
            unique = true
    )
    String userName;
    @Column(
            unique = true
    )
    String email;
    String password;
    String MapsUrl;
    MedicalSpecialty specialty;
    @OneToMany(mappedBy = "medecin")
    private List<Consultation> consultations;
    @OneToMany(mappedBy = "medecin")
    private List<Avis> avis;
}
