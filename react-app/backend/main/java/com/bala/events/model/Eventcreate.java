package com.bala.events.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Events")
public class Eventcreate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "Event_name", nullable = false)
    private String eventName;

    @Column(name = "Event_desc", nullable = false)
    private String eventDesc;

    @Column(name = "Imgurl", nullable = false)
    private String imgUrl;

    // Default constructor
    public Eventcreate() {
    }

    public Eventcreate(Long id, String eventName, String eventDesc, String imgUrl) {
        this.id = id;
        this.eventName = eventName;
        this.eventDesc = eventDesc;
        this.imgUrl = imgUrl;
    }

    // Getters and setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEventName() {
        return eventName;
    }

    public void setEventName(String eventName) {
        this.eventName = eventName;
    }

    public String getEventDesc() {
        return eventDesc;
    }

    public void setEventDesc(String eventDesc) {
        this.eventDesc = eventDesc;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
 
   }

   
}
