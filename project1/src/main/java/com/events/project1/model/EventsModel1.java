package com.events.project1.model;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name="Booking")

public class EventsModel1 {
            @Id
            @GeneratedValue(strategy = GenerationType.IDENTITY)
            private Long bid;
            @Column(name = "first_name", nullable = false)  
            private String firstname;
            @Column(name = "last_name", nullable = false)
            private String lastname;
            @Column(name = "email", nullable = false,unique = true)
            private String email;
            @Column(name = "company_name", nullable = false)
            private String companyname;
            @Column(name = "company_address", nullable = false)
            private String companyaddress;
            @Column(name = "mobile_number", nullable = false)
            private String mobilenumber;
            @Column(name = "event_name", nullable = false)
            private String eventname;
            @Column(name = "budget", nullable = false)
            private String budget;
          


        
    
        public EventsModel1(Long bid, String firstname, String lastname, String email, String companyname,
        String companyaddress, String mobilenumber, String eventname, String budget) {
    this.bid = bid;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.companyname = companyname;
    this.companyaddress = companyaddress;
    this.mobilenumber = mobilenumber;
    this.eventname = eventname;
    this.budget = budget;
}
        public Long getBid() {
            return bid;
        }


        


        public void setBid(Long bid) {
            this.bid = bid;
        }


        public String getFirstname() {
            return firstname;
        }


        public void setFirstname(String firstname) {
            this.firstname = firstname;
        }


        public String getLastname() {
            return lastname;
        }


        public void setLastname(String lastname) {
            this.lastname = lastname;
        }


        public String getEmail() {
            return email;
        }


        public void setEmail(String email) {
            this.email = email;
        }


        public String getCompanyname() {
            return companyname;
        }


        public void setCompanyname(String companyname) {
            this.companyname = companyname;
        }


        public String getCompanyaddress() {
            return companyaddress;
        }


        public void setCompanyaddress(String companyaddress) {
            this.companyaddress = companyaddress;
        }


        public String getMobilenumber() {
            return mobilenumber;
        }


        public void setMobilenumber(String mobilenumber) {
            this.mobilenumber = mobilenumber;
        }


        public String getEventname() {
            return eventname;
        }


        public void setEventname(String eventname) {
            this.eventname = eventname;
        }


        public String getBudget() {
            return budget;
        }


        public void setBudget(String budget) {
            this.budget = budget;
        }


      


        public EventsModel1(){

    
           }
        public Object save(EventsModel1 kl) {
            // TODO Auto-generated method stub
            throw new UnsupportedOperationException("Unimplemented method 'save'");
        }
        public List<EventsModel1> findAll() {
            // TODO Auto-generated method stub
            throw new UnsupportedOperationException("Unimplemented method 'findAll'");
        }


           
    

}






