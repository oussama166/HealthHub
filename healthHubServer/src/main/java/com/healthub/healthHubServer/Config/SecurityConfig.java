package com.healthub.healthHubServer.Config;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;


@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    public UserDetailsService medecinDetailsService()  {
        return new MedecinDetailsService();
    }
    @Bean
    public UserDetailsService patientDetailsService()  {
        return new PatientDetailService();
    }
    @Bean
    SecurityFilterChain defaultSecurityFilterChain(HttpSecurity http) throws Exception {

        http
                .csrf((csrf) -> csrf.disable())
                .authorizeHttpRequests((requests) -> requests
                        .requestMatchers("/login").authenticated()
                        .requestMatchers("/login").permitAll())
                .formLogin((form -> form.loginPage("/login").permitAll()));

        return http.build();
    }
    @Bean
    public PasswordEncoder passwordEncoder() {
        // Utiliser BCrypt pour encoder les mots de passe
        return new BCryptPasswordEncoder();
    }
    }

