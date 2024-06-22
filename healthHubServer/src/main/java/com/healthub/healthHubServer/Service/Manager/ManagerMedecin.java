package com.healthub.healthHubServer.Service.Manager;

import com.healthub.healthHubServer.DOA.Model.Medecin;
import com.healthub.healthHubServer.DOA.Model.Medecin;

import java.util.List;
import java.util.Optional;

public interface ManagerMedecin {

    // ========== CREATE ========= //
    //  This for crete user with all info
    Optional<Medecin> createMedecin(Medecin info);


    // ========== SELECT ========= //
    // This is for getting all the users in db
    Optional<List<Medecin>> getMedecins();


    // This is for getting user by all info of the user
    Optional<List<Medecin>> getMedecin(
            Medecin medecin
    );

    //  This is for getting typical user with name
    Optional<List<Medecin>> getMedecin(
            String name
    );

    // ========== UPDATE ========= //
    // This is for update user by id
    Optional<Medecin> updateMedecin(
            Medecin info
    );

    // ========== DELETE ========= //
    //  This is for deleting user by user id
    Optional<Medecin> removeMedecin(
            int userId
    );

    // This is for deleting user or a bunch of users by name
    Optional<Medecin> removeMedecin(
            String useString
    );


}
