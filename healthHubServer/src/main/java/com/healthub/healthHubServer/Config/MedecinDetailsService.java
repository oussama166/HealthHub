/*public class MedecinDetailsService implements UserDetailsService {
package com.healthub.healthHubServer.Config;

import com.healthub.healthHubServer.DOA.Model.Medecin;
import com.healthub.healthHubServer.DOA.Repository.MedecinRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
    @Autowired
    private MedecinRepository medecinRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<Medecin> medecin = medecinRepository.findByUserName(username);
        if (medecin == null) {
            throw new UsernameNotFoundException("Médecin non trouvé avec le nom d'utilisateur: " + username);
        }
        return org.springframework.security.core.userdetails.User
                .withUsername(medecin.get().getUserName())
                .password(medecin.get().getPassword())
                .roles("MEDECIN")
                .build();
    }
}

 */

