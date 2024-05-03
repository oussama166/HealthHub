package com.healthub.healthHubServer.Web;

import com.healthub.healthHubServer.DOA.Model.User;
import com.healthub.healthHubServer.Service.Manager.ManagerUser;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.logging.Level;
import java.util.stream.Collectors;

@Slf4j
@Controller
@RequestMapping("/api/v1")
@CrossOrigin(
        value = "http://localhost:4200/"
)
public class ControllerUser {

    // Inject the manager of user
    private final ManagerUser managerUser;
    private static final Logger logger = LoggerFactory.getLogger(ControllerUser.class);



    public ControllerUser(ManagerUser managerUser) {
        this.managerUser = managerUser;
    }


    // ========== CREATE ========= //
    @PostMapping(
            path = "/createUser",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<?> createUser(
            @RequestBody User Info
    ) {
        try {
            Optional<User> user = managerUser.createUser(Info);
            if (user.isPresent()) {
                return ResponseEntity.status(200).body("(" + user.get().getUserName() + " , " + user.get().getEmail() + ")");
            }
            throw new Exception("User not created !!!");
        } catch (Exception e) {
            logger.warn( e.getMessage());
            return ResponseEntity.status(400).body("");
        }
    }

    @PostMapping(
            path = "/createUserByInfo",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<?> createUserByInfo(
            @RequestParam String name,
            @RequestParam String email,
            @RequestParam String userName,
            @RequestParam String password
    ) {
        try {
            Optional<User> user = managerUser.createUser(email, name, userName, password);
            if (user.isPresent()) {
                return ResponseEntity.status(200).body("(" + user.get().getUserName() + " , " + user.get().getEmail() + ")");
            }
            throw new Exception("User not created !!!");
        } catch (Exception e) {
            logger.warn( e.getMessage());
            return ResponseEntity.status(400).body("");
        }
    }

    // ========== SELECT ========= //
    @GetMapping(
            path = "/getUsers",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<?> getUsers(

    ) {
        try {
            Optional<List<User>> user = managerUser.getUsers();
            if (user.isPresent()) {
                return ResponseEntity.status(200).body(user);
            }
            throw new Exception("Error occur get users !!!");
        } catch (Exception e) {
            logger.warn( e.getMessage());
            return ResponseEntity.status(400).body("");
        }
    }

    @GetMapping(
            path = "/getUser",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<?> getUser(
            @RequestBody User user
    ) {
        try {
            Optional<User> userInfo = managerUser.getUser(user);
            if (userInfo.isPresent()) {
                return ResponseEntity.status(200).body(userInfo);
            }
            throw new Exception("User not found !!!");
        } catch (Exception e) {
            logger.warn( e.getMessage());
            return ResponseEntity.status(400).body("");
        }
    }

    @GetMapping(
            path = "/getUserByName",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<?> getUserByName(
            @RequestParam String name
    ) {
        try {
            Optional<List<User>> users = managerUser.getUser(name);
            if (users.isPresent()) {
                return ResponseEntity.status(200).body(users.get());
            }
            throw new Exception("No user is by this name : " + name);
        } catch (Exception e) {
            logger.warn( e.getMessage());
            return ResponseEntity.status(400).body("");
        }
    }

    // ========== UPDATE ========= //
    @PostMapping(
            path = "/updateUser",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<?> updateUser(
            @RequestBody
            User user
    ) {
        try {
            Optional<User> userInfo = managerUser.updateUser(user);
            if (userInfo.isPresent()) {
                return ResponseEntity.status(200).body(userInfo.get());
            }
            throw new Exception("User can not be deleted");
        } catch (Exception e) {
            logger.warn( e.getMessage());
            return ResponseEntity.status(400).body("");
        }
    }

    // ========== DELETE ========= //
    @DeleteMapping(
            path = "/removeUser/{id}",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<?> removeUser(
            @PathVariable("id") int userId
    ) {
        try {
            Optional<User> user = managerUser.removeUser(userId);
            if (user.isPresent()) {
                return ResponseEntity.status(200).body(user);
            }
            throw new Exception("Can not found user with id : " + userId);
        } catch (Exception e) {
            logger.warn( e.getMessage());
            return ResponseEntity.status(400).body("");
        }
    }

    @DeleteMapping(
            path = "/removeUser/{name}",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<?> removeUser(
            @PathVariable("name") String name
    ) {
        try {
            Optional<List<User>> users = managerUser.removeUser(name);
            if (users.isPresent()) {
                return ResponseEntity.status(200).body(
                        users.get().stream().map(User::getUserName).collect(Collectors.toList())
                );
            }
            throw new Exception("User can not be deleted!!!");
        } catch (Exception e) {
            logger.warn( e.getMessage());

            return ResponseEntity.status(400).body("");
        }
    }

    @DeleteMapping(
            path = "/removeUser/{name},{email}",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<?> removeUser(
        @PathVariable("name") String name,
        @PathVariable("email") String email
    ){
        try {
            Optional<List<User>> users = managerUser.removeUser(name,email);
            if (users.isPresent()) {
                return ResponseEntity.status(200).body(
                        users.get().stream().map(User::getUserName).collect(Collectors.toList())
                );
            }
            throw new Exception("User can not be deleted!!!");
        } catch (Exception e) {
            logger.warn( e.getMessage());
            return ResponseEntity.status(400).body("");
        }
    }
}

