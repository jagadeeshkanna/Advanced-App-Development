package com.bala.events.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="feedback")
public class Feedback {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long fid;
  @Column(name="Email",nullable = false,unique = true)
  private String email;
  @Column(name="Name",nullable = false)
  private String name;
  @Column(name="Rating",nullable = false)
  private String rating;
  @Column(name="feedback",nullable=false)
  private String feedback;
public Long getFid() {
    return fid;
}
public void setFid(Long fid) {
    this.fid = fid;
}
public String getEmail() {
    return email;
}
public void setEmail(String email) {
    this.email = email;
}
public String getName() {
    return name;
}
public void setName(String name) {
    this.name = name;
}
public String getRating() {
    return rating;
}
public void setRating(String rating) {
    this.rating = rating;
}
public String getFeedback() {
    return feedback;
}
public void setFeedback(String feedback) {
    this.feedback = feedback;
}
public Feedback(Long fid, String email, String name, String rating, String feedback) {
    this.fid = fid;
    this.email = email;
    this.name = name;
    this.rating = rating;
    this.feedback = feedback;
}
  
  public Feedback(){
    
  }

}
