package com.healthub.healthHubServer.Service;

import com.healthub.healthHubServer.DOA.Model.Medecin;
import com.healthub.healthHubServer.DOA.Repository.MedecinRepository;
import com.healthub.healthHubServer.Service.Manager.ManagerMedecin;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.MissingFormatArgumentException;
import java.util.Optional;

@Slf4j
@Service
public class ServiceMedecin implements ManagerMedecin {

    //    Inject user repository
    private final MedecinRepository medecinRepository;

    // Logger
    private static final Logger logger = LoggerFactory.getLogger(ServiceMedecin.class);

    // Constructor injection
    public ServiceMedecin(MedecinRepository medecinRepository) {
        this.medecinRepository = medecinRepository;
    }

    // ========== CREATE ========= //
    @Override
    public Optional<Medecin> createMedecin(Medecin info) {
        try {
            Optional<Medecin> medecin = medecinRepository.findByUserNameAndEmail(info.getUserName(), info.getEmail());
            logger.info(medecin.isPresent() ? medecin.get().getUserName() : info.getMapsUrl());
            if (medecin.isPresent()) {
                throw new Exception("Medecin already exist");
            }
            medecinRepository.save(info);
            return Optional.of(info);
        } catch (Exception e) {
            logger.warn(e.getMessage());
            return Optional.empty();
        }
    }

    // ========== CONNECT ========= //

    @Override
    public Optional<Medecin> connectMedecin(String email, String password) {
        try {
            Optional<Medecin> findMedEmAndPass = medecinRepository.findByEmailAndPassword()
        } catch (Exception e) {

        }
    }

    // ========== SELECT ========= //

    // This is for getting all the users in db
    @Override
    public Optional<List<Medecin>> getMedecins() {
        return Optional.of(medecinRepository.findAll());
    }

    // This is for getting user by all info of the user
    @Override
    public Optional<List<Medecin>> getMedecin(Medecin medecin) {
        try {
            Optional<List<Medecin>> medecinList = this.medecinRepository.findAllBy(medecin);
            if (medecinList.isEmpty()) {
                throw new Exception("No med with this info !!!");
            }
            return medecinList;
        } catch (Exception e) {
            logger.warn(e.getMessage());
            return Optional.empty();
        }
    }

    //  This is for getting typical user with name
    @Override
    public Optional<List<Medecin>> getMedecin(String name) {
        try {
            if (name.isEmpty()) {
                throw new MissingFormatArgumentException("Can not search by empty name");
            }
            Optional<List<Medecin>> medecin = medecinRepository.findByName(name);
            if (medecin.isPresent()) {
                return medecin;
            }
            throw new Exception("Can not find the doc in db!!!");
        } catch (Exception e) {
            logger.warn(e.getMessage());
            return Optional.empty();
        }
    }
    // ========== UPDATE ========= //

    // This is for update user by id
    @Override
    public Optional<Medecin> updateMedecin(Medecin info) {
        try {
            if (info == null) {
                throw new MissingFormatArgumentException("Can not search by empty object !!!");
            }
            Optional<Medecin> medecin = medecinRepository.findById(info.getId());
            if (medecin.isPresent()) {
                medecin.get().setName(info.getName());
                medecin.get().setUserName(info.getUserName());
                medecin.get().setEmail(info.getEmail());
                medecin.get().setPassword(info.getPassword());
                medecin.get().setMapsUrl(info.getMapsUrl());
                medecin.get().setAvis(info.getAvis());
                medecin.get().setConsultations(info.getConsultations());
                medecinRepository.save(medecin.get());
                return medecin;
            }
            throw new Exception("Can not update the doc info !!!");

        } catch (Exception e) {
            logger.warn(e.getMessage());
            return Optional.empty();
        }

    }

    // ========== DELETE ========= //
    @Override
    public Optional<Medecin> removeMedecin(int userId) {
        try {
            if (userId <= 0) {
                throw new MissingFormatArgumentException("We can get user id less than 1");
            }
            Optional<Medecin> medecin = medecinRepository.findById(userId);
            if (medecin.isPresent()) {
                medecinRepository.delete(medecin.get());
                return medecin;
            }
            throw new Exception("Doc can not be deleted !!!");
        } catch (Exception e) {
            logger.warn(e.getMessage());
            return Optional.empty();
        }
    }

    @Override
    public Optional<Medecin> removeMedecin(String username) {
        try {
            if (username.isEmpty()) {
                throw new Exception("We can not search by empty username!!!");
            }
            Optional<Medecin> medecin = medecinRepository.findByUserName(username);
            if (medecin.isPresent()) {
                medecinRepository.delete(medecin.get());
                return medecin;
            }
            throw new Exception("We can not find the Doc by username : " + username);
        } catch (Exception e) {
            logger.warn(e.getMessage());
            return Optional.empty();
        }
    }


}
