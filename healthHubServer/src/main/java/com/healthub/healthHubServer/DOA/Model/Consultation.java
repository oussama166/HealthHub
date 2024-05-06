package com.healthub.healthHubServer.DOA.Model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.healthub.healthHubServer.DOA.Model.Enum.ConsultationStatus;
import jakarta.persistence.*;
import lombok.*;

import java.sql.Time;
import java.util.Date;

@Builder
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Consultation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    Date date;
    Time Heure;
    String Comment;
    @Builder.Default()
    ConsultationStatus Status = ConsultationStatus.PENDING;
    @ManyToOne
    @JoinColumn(name = "medecin_id")
    private Medecin medecin;
    @ManyToOne
    @JoinColumn(name = "patient_id")
    @JsonBackReference
    private Patient patientConsulatation;

}
