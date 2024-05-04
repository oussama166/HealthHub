package com.healthub.healthHubServer.DOA.Repository;

import com.healthub.healthHubServer.DOA.Model.Medecin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface MedecinRepository extends JpaRepository<Medecin, Integer> {
    @Query(
            value = "SELECT md FROM Medecin md WHERE md.userName = ?1 AND md.email = ?2"
    )
    Optional<Medecin> findByUserNameAndEmail(String userName, String Email);

    @Query(
            value = "SELECT md FROM Medecin md WHERE md.name = ?1"
    )
    Optional<List<Medecin>> findByName(String name);

    @Query(
            value = "SELECT md FROM Medecin md WHERE md.userName = ?1"
    )
    Optional<Medecin> findByUserName(String username);


    @Query(
            value = "SELECT md FROM Medecin md WHERE md = ?1"
    )
    Optional<List<Medecin>> findAllBy(Medecin md);
}
