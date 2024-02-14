package com.bala.events.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Facility")
public class Facility {
   @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long f_id;

    @Column(name = "facility", nullable = false)
    private String facility;

    @Column(name = "Address", nullable = false)
    private String address;

    @Column(name = "Amount", nullable = false)
    private String amount;

    public Long getF_id() {
        return f_id;
    }

    public void setF_id(Long f_id) {
        this.f_id = f_id;
    }

    public String getFacility() {
        return facility;
    }

    public void setFacility(String facility) {
        this.facility = facility;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getAmount() {
        return amount;
    }

    public void setAmount(String amount) {
        this.amount = amount;
    }

    public Facility(Long f_id, String facility, String address, String amount) {
        this.f_id = f_id;
        this.facility = facility;
        this.address = address;
        this.amount = amount;
    }
    
    public Facility(){
        
    }

   
}
