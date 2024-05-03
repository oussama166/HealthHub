package com.healthub.healthHubServer.DOA.Repository;

import com.healthub.healthHubServer.DOA.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
}
