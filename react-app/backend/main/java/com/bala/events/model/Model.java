package com.bala.events.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name="Bookings")
public class Model {
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
        @Column(name = "type_of_event", nullable = false)
        private String typeOfEvent;
        @Column(name = "If_contains_game", nullable = false)
        private String game;
        @Column(name = "If_contains_food", nullable = false)
        private String food;
        @Column(name = "Any_queries", nullable = false)
        private String anyQueries;
        @Column(name="Date",nullable =false)
        private String date;
        @Column(name="Time",nullable=false)
        private String time;
        
        
       public String getDate() {
            return date;
        }


        public void setDate(String date) {
            this.date = date;
        }


        public String getTime() {
            return time;
        }


        public void setTime(String time) {
            this.time = time;
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


        public String getTypeOfEvent() {
            return typeOfEvent;
        }


        public void setTypeOfEvent(String typeOfEvent) {
            this.typeOfEvent = typeOfEvent;
        }


        public String getGame() {
            return game;
        }


        public void setGame(String game) {
            this.game = game;
        }


        public String getFood() {
            return food;
        }


        public void setFood(String food) {
            this.food = food;
        }


        public String getAnyQueries() {
            return anyQueries;
        }


        public void setAnyQueries(String anyQueries) {
            this.anyQueries = anyQueries;
        }


    


    


    public Model(Long bid, String firstname, String lastname, String email, String companyname,
                String companyaddress, String mobilenumber, String eventname, String budget, String typeOfEvent,
                String game, String food, String anyQueries, String date, String time) {
            this.bid = bid;
            this.firstname = firstname;
            this.lastname = lastname;
            this.email = email;
            this.companyname = companyname;
            this.companyaddress = companyaddress;
            this.mobilenumber = mobilenumber;
            this.eventname = eventname;
            this.budget = budget;
            this.typeOfEvent = typeOfEvent;
            this.game = game;
            this.food = food;
            this.anyQueries = anyQueries;
            this.date = date;
            this.time = time;
        }


    public Model(){

       }
}
