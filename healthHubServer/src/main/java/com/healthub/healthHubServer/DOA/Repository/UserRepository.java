package com.healthub.healthHubServer.DOA.Repository;

import com.healthub.healthHubServer.DOA.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    @Query(
            value="SELECT us FROM User us WHERE us = ?1"
    )
    Optional<User> findByAll(User user);
    @Query(
            value="SELECT us FROM User us WHERE us.name = ?1"
    )
    Optional<List<User>> findByName(String name);
    @Query(
            value="SELECT us FROM User us WHERE us.name = ?1 AND us.email = ?2"
    )
    Optional<List<User>> findByNameAndEmail(String name , String email);
}
