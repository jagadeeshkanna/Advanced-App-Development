package com.events.project1.model;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Feedback")

public class FeedbackModel {

     @Id
            @GeneratedValue(strategy = GenerationType.IDENTITY)
            private Long bid;
            @Column(name = "name", nullable = false)
            private String name;
            @Column(name = "email", nullable = false)
            private String email;
            @Column(name = "content", nullable = false)
            private String content;

            
           
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
            public String getContent() {
                return content;
            }
            public void setContent(String content) {
                this.content = content;
            }
            

            public FeedbackModel(Long bid, String name, String email, String content) {
                this.bid = bid;
                this.name = name;
                this.email = email;
                this.content = content;
            }

            public FeedbackModel()
            {

            }
            public List<FeedbackModel> findAll() {
                // TODO Auto-generated method stub
                throw new UnsupportedOperationException("Unimplemented method 'findAll'");
            }
            public Object save(FeedbackModel m) {
                // TODO Auto-generated method stub
                throw new UnsupportedOperationException("Unimplemented method 'save'");
            }
            
}
