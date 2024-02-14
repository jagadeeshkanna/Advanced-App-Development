package com.bala.events.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Login")
public class Login {
        @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long L_id;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "password", nullable = false)
    private String password;

    public Long getL_id() {
        return L_id;
    }

    public void setL_id(Long l_id) {
        L_id = l_id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Login(Long l_id, String email, String password) {
        L_id = l_id;
        this.email = email;
        this.password = password;
    }

   public Login(){
    
   }
}
