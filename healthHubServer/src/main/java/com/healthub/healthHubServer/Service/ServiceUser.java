package com.healthub.healthHubServer.Service;

import com.healthub.healthHubServer.DOA.Model.User;
import com.healthub.healthHubServer.DOA.Repository.UserRepository;
import com.healthub.healthHubServer.Service.Manager.ManagerUser;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.MissingFormatArgumentException;
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
            Optional<User> user = userRepository.findByAll(info);
            if (user.isPresent()) {
                throw new Exception("User already exist !!!");
            }
            userRepository.save(info);
            return Optional.of(info);
        } catch (Exception e) {
            return Optional.empty();
        }
    }

    @Override
    public Optional<User> createUser(String email, String name, String userName, String password) {
        User newUser = new User();
        try {
            if (email.trim().isEmpty() || name.trim().isEmpty() || password.trim().isEmpty()) {
                throw new MissingFormatArgumentException("We can not create user with empty strings !!!");
            }
            newUser.setEmail(email);
            newUser.setName(name);
            newUser.setUserName(userName);
            newUser.setPassword(password);
            return createUser(newUser);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return Optional.empty();
        }
    }

    // ========== SELECT ========= //
    @Override
    public Optional<List<User>> getUsers() {
        return Optional.of(userRepository.findAll());
    }

    @Override
    public Optional<User> getUser(User user) {
        try {
            if (user == null) {
                throw new MissingFormatArgumentException("We couldn't search by empty user !!!");
            }
            Optional<User> userFind = this.userRepository.findByAll(user);
            if (userFind.isPresent()) {
                return userFind;
            }
            throw new Exception("No user is define by this credential");
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return Optional.empty();

        }
    }

    @Override
    public Optional<List<User>> getUser(String name) {
        try {
            if (name.isEmpty()) {
                throw new MissingFormatArgumentException("We can not search by empty name!!!");
            }
            Optional<List<User>> user = this.userRepository.findByName(name);
            if (user.isPresent()) {
                return user;
            }
            throw new Exception("No user we this name : " + name);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return Optional.empty();
        }
    }

    // ========== UPDATE ========= //
    @Override
    public Optional<User> updateUser(User userInfo) {
        try {
            if (userInfo == null) {
                throw new MissingFormatArgumentException("We can not search by empty object of user");
            }
            userRepository.save(userInfo);
            return Optional.of(userInfo);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return Optional.empty();
        }
    }


    // ========== DELETE ========= //
    @Override
    public Optional<User> removeUser(int userId) {
        try {
            if (userId < 0) {
                throw new MissingFormatArgumentException("We can't find user by < 0 id");
            }
            Optional<User> user = userRepository.findById(userId);
            if (user.isPresent()) {
                this.userRepository.delete(user.get());
                return user;
            }
            throw new Exception("User can not be founded in db to be removed");
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return Optional.empty();
        }
    }

    @Override
    public Optional<List<User>> removeUser(String name) {
        try {
            if (name.trim().isEmpty()) {
                throw new MissingFormatArgumentException("Can not find user by empty name !!!");
            }
            Optional<List<User>> users = userRepository.findByName(name);
            if (users.isPresent()) {
                userRepository.deleteAll(users.get());
                return users;
            }
            throw new Exception("Can not find user or users by this name : " + name);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return Optional.empty();
        }
    }

    @Override
    public Optional<List<User>> removeUser(String name, String email) {
        try {


            if (name.trim().isEmpty() || email.trim().isEmpty()) {
                throw new MissingFormatArgumentException("We can not reach your info by empty values !!!");
            }
            Optional<List<User>> users = userRepository.findByNameAndEmail(name, email);
            if (users.isPresent()) {
                userRepository.deleteAll(users.get());
                return users;
            }
            throw new Exception("User or user by name : " + name + " and email : " + email + " not found!");
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return Optional.empty();
        }

    }
}
