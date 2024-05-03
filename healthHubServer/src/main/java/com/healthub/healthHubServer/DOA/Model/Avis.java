package com.healthub.healthHubServer.DOA.Model;

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
public class Avis {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    int note;
    String commentaire;
    @ManyToOne
    @JoinColumn(name = "medecin_id")
    private Medecin medecin;
}
