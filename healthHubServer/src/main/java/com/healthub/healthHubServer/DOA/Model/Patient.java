package com.healthub.healthHubServer.DOA.Model;

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
    @OneToOne(mappedBy = "patient", cascade = CascadeType.ALL)
    private Dossier_Medicale dossier_medicale;
    @OneToMany(mappedBy = "patient")
    private List<Consultation> consultations;
}
