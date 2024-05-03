package com.healthub.healthHubServer.Service.Manager;

import com.healthub.healthHubServer.DOA.Model.User;

import java.util.List;
import java.util.Optional;

public interface ManagerUser {

    // ========== CREATE ========= //
    //  This for crete user with all info
    Optional<User> createUser(User info);

    // This for create user with Email, Name, Username and password
    Optional<User> createUser(
            String email,
            String name,
            String userName,
            String password
    );

    // ========== SELECT ========= //
    // This is for getting all the users in db
    Optional<List<User>> getUsers();

    // This is for getting user by all info of the user
    Optional<User> getUser(
            User user
    );

    //  This is for getting typical user with name
    Optional<List<User>> getUser(
            String name
    );

    // ========== UPDATE ========= //
    // This is for update user by id
    Optional<User> updateUser(
            User info
    );

    // ========== DELETE ========= //
    //  This is for deleting user by user id
    Optional<User> removeUser(
            int userId
    );

    // This is for deleting user or a bunch of users by name
    Optional<List<User>> removeUser(
            String name
    );

    // This is for deleting user by name and email
    Optional<List<User>> removeUser(
            String name,
            String email
    );


}
