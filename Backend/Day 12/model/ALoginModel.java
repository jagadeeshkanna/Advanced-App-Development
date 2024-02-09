package com.events.project1.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name="ALogin")

public class ALoginModel {
    @Id
            @GeneratedValue(strategy = GenerationType.IDENTITY)
            private Long bid;
            @Column(name = "email", nullable = false,unique = true)
            private String email;
            @Column(name = "password", nullable = false)
            private String password;
            
            
           public Long getBid() {
                return bid;
            }
    
    
            public void setBid(Long bid) {
                this.bid = bid;
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
    
    
               
         
        
    
    
        public ALoginModel(Long bid, String email ,String password) {
                this.bid = bid;
                this.email = email;
                this.password = password;
               
            }
    
    
        public ALoginModel(){
    
           }
    

}






