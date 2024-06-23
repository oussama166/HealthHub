package com.healthub.healthHubServer.DOA.Model;

import com.healthub.healthHubServer.DOA.Model.Enum.MedicalSpecialty;
import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import lombok.*;

import java.util.Date;
import java.util.List;

@Builder
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
    String Ville;
    @Temporal(TemporalType.TIMESTAMP)
    Date joinDate;
    @Min(value = 3, message = "The price should be greater than 3$ !!!")
    Double Price;
    MedicalSpecialty specialty;
    @OneToMany(mappedBy = "medecin")
    private List<Consultation> consultations;
    @OneToMany(mappedBy = "medecin")
    private List<Avis> avis;

    @PrePersist
    protected void onCreate() {
        if (this.joinDate == null) {
            this.joinDate = new Date();
        }
    }
}
