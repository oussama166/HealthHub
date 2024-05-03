package com.healthub.healthHubServer.Web;

import com.healthub.healthHubServer.DOA.Model.User;
import com.healthub.healthHubServer.Service.Manager.ManagerUser;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.logging.Level;
import java.util.logging.Logger;

@Slf4j
@Controller
@RequestMapping("/api/v1")
@CrossOrigin(
        value = "http://localhost:4200/"
)
public class ControllerUser {

    // Inject the manager of user
    private final ManagerUser managerUser;
    static Logger logger = (Logger) LoggerFactory.getLogger(ControllerUser.class);

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
            logger.log(Level.WARNING, e.getMessage());
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
            logger.log(Level.WARNING, e.getMessage());
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
            logger.log(Level.WARNING,e.getMessage());
            return ResponseEntity.status(400).body("");
        }
    }

    public ResponseEntity<?> getUser(
            @RequestBody
    )
}
