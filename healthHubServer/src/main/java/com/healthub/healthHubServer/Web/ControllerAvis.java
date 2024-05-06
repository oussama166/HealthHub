package com.healthub.healthHubServer.Web;

import com.healthub.healthHubServer.DOA.Model.Avis;
import com.healthub.healthHubServer.Service.Manager.ManagerAvis;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Optional;

@Slf4j
@Controller
@RequestMapping("/api/v1")
@CrossOrigin(
        value = "http://localhost:4200/"
)
public class ControllerAvis {


    // Injection of manager avis
    private final ManagerAvis managerAvis;

    //  To log the result in terminal
    private static final Logger logger = LoggerFactory.getLogger(ControllerAvis.class);


    public ControllerAvis(ManagerAvis managerAvis) {
        this.managerAvis = managerAvis;
    }

    @PostMapping(
            path = "/setAvis",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<?> setAvis(
            @RequestBody Avis avisPar
    ) {
        try {
            System.out.println(avisPar.getPatientAvis().getId());
            System.out.println(avisPar.getMedecin().getId());
            System.out.println(avisPar.getId());
            System.out.println(avisPar.getNote());
            System.out.println(avisPar.getCommentaire());
            Optional<Avis> avis = managerAvis.setRating(
                    avisPar.getPatientAvis().getId(),
                    avisPar.getMedecin().getId(),
                    avisPar.getId(),
                    avisPar.getNote(),
                    avisPar.getCommentaire()
            );
            if (avis.isPresent()) {
                return ResponseEntity.status(200).body(avis.get());
            }
            throw new Exception("Impossible to rate this doc !!!");
        } catch (Exception e) {
            logger.warn(e.getMessage());
            return ResponseEntity.status(400).body(e.getMessage());
        }

    }
}
