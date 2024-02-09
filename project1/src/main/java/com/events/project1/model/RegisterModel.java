package com.events.project1.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name="Register")

public class RegisterModel {
    @Id
            @GeneratedValue(strategy = GenerationType.IDENTITY)
            private Long bid;
            @Column(name = "name", nullable = false)
            private String name;
            @Column(name = "email", nullable = false,unique = true)
            private String email;
            @Column(name = "password", nullable = false)
            private String password;
            @Column(name = "confirmpassword", nullable = false)
            private String confirmpassword;

            // name,email,password,confirm password
            
           
    
        public RegisterModel(){
    
           }

        public Long getBid() {
            return bid;
        }

        public void setBid(Long bid) {
            this.bid = bid;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
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

        public String getConfirmpassword() {
            return confirmpassword;
        }

        public void setConfirmpassword(String confirmpassword) {
            this.confirmpassword = confirmpassword;
        }

        public RegisterModel(Long bid, String name, String email, String password, String confirmpassword) {
            this.bid = bid;
            this.name = name;
            this.email = email;
            this.password = password;
            this.confirmpassword = confirmpassword;
        }
        
    

}






