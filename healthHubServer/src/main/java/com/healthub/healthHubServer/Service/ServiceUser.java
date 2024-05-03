package com.healthub.healthHubServer.Service;

import com.healthub.healthHubServer.DOA.Model.User;
import com.healthub.healthHubServer.DOA.Repository.UserRepository;
import com.healthub.healthHubServer.Service.Manager.ManagerUser;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ServiceUser implements ManagerUser {

    //    Inject user repository
    private final UserRepository userRepository;

    // Constructor injection
    public ServiceUser(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // ========== CREATE ========= //
    @Override
    public Optional<User> createUser(User info) {
        try {
            // find if the user already exists
            //Optional<User> user = userRepository.findBy(info);

        } catch (Exception e) {
            return Optional.empty();
        }
    }

    @Override
    public Optional<User> createUser(String email, String name, String userName, String password) {
        return Optional.empty();
    }

    @Override
    public Optional<List<User>> getUsers() {
        return Optional.empty();
    }

    @Override
    public Optional<User> getUser(User user) {
        return Optional.empty();
    }

    @Override
    public Optional<List<User>> getUser(String name) {
        return Optional.empty();
    }

    @Override
    public Optional<User> updateUser(int idUser) {
        return Optional.empty();
    }

    @Override
    public Optional<User> updateUser(String name, String email) {
        return Optional.empty();
    }

    @Override
    public Optional<User> removeUser(int userId) {
        return Optional.empty();
    }

    @Override
    public Optional<List<User>> removeUser(String name) {
        return Optional.empty();
    }

    @Override
    public Optional<User> removeUser(String name, String email) {
        return Optional.empty();
    }
}
