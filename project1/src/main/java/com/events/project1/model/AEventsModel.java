package com.events.project1.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="AEventModel")

public class AEventsModel {

      @Id
            @GeneratedValue(strategy = GenerationType.IDENTITY)
            private Long bid;
            @Column(name = "eventname", nullable = false)
            private String eventname;
            @Column(name = "description", nullable = false)
            private String description;
            @Column(name = "url", nullable = false)
            private String url;
            
          
            public Long getBid() {
                return bid;
            }
            public void setBid(Long bid) {
                this.bid = bid;
            }
            public String getEventname() {
                return eventname;
            }
            public void setEventname(String eventname) {
                this.eventname = eventname;
            }
            public String getDescription() {
                return description;
            }
            public void setDescription(String description) {
                this.description = description;
            }
            public String getUrl() {
                return url;
            }
            public void setUrl(String url) {
                this.url = url;
            }


            public AEventsModel(Long bid, String eventname, String description, String url) {
                this.bid = bid;
                this.eventname = eventname;
                this.description = description;
                this.url = url;
            }

            public AEventsModel()
            {

            }
            //eventname,description,url
            
}
