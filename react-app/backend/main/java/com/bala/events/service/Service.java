package com.bala.events.service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import com.bala.events.model.Eventcreate;
import com.bala.events.model.Facility;
import com.bala.events.model.Feedback;
import com.bala.events.model.Login;
import com.bala.events.model.Model;
import com.bala.events.model.Signup;
import com.bala.events.repo.Facilityrepo;
import com.bala.events.repo.Loginrepo;
import com.bala.events.repo.Repo;
import com.bala.events.repo.Signuprepo;
import com.bala.events.repo.eventCreateRepo;
import com.bala.events.repo.feedbackrepo;

@org.springframework.stereotype.Service
public class Service {
  @Autowired
  private Repo r;
  @Autowired
  private eventCreateRepo er;
  @Autowired
  private Facilityrepo facilityservice;
  @Autowired
  private feedbackrepo feedbackservice;
   @Autowired
   private Loginrepo loginservice;
  @Autowired
  private Signuprepo signupservice;
  //post
  public String createBook(Model m) {
    return r.save(m) != null? "booking successfully":"booking failed";
}
  public String CreateEvent(Eventcreate cr) {
    return er.save(cr) != null? "Event created":"Event not created";
}
   
  public String postFacility(Facility f){
    return facilityservice.save(f) !=null? "facility created":"facility not created";
  }
  
   public String postFeedback(Feedback fb){
    return feedbackservice.save(fb) !=null? "feedback submitted":"feedback not submitted";
   }
  
  public String postLogin(Login l){
    return loginservice.save(l) !=null? "Login successfully":"Login failed";
  }
  
  public String postSignup(Signup s){
    return signupservice.save(s)!=null? "Signup successfully":"signup failed";
  }
  


  //get
   public List<Model> getAllBookings(){
    return r.findAll();
   }
   public List<Eventcreate> getAllEvents(){
    return er.findAll();
   }
   
   public List<Facility> getAllFacilities(){
    return facilityservice.findAll();
   }
   
   public List<Feedback> getAllFeedbacks(){
    return feedbackservice.findAll();
   }
  
   public List<Login> getAllLogins(){
    return loginservice.findAll();
   }

   public List<Signup> getAllSignups(){
    return signupservice.findAll();
   }

   //delete
   public void deleteEntityByEventName(String eventName) {
    er.deleteByEventName(eventName);
   }

   public void deleteEntityFacility(String facility) {
    
    facilityservice.deleteByFacility(facility);
}



   public void deleteEntityByEventNameL(String email){
    r.deleteByEmail(email);
   }

   //put
   public Model updateBooking(String email, Model updatedModel) {
    Model existingModel = (Model) r.findByEmail(email);

    if (existingModel != null) {
        existingModel.setFirstname(updatedModel.getFirstname());
        existingModel.setLastname(updatedModel.getLastname());
        existingModel.setCompanyname(updatedModel.getCompanyname());
        existingModel.setCompanyaddress(updatedModel.getCompanyaddress());
        existingModel.setMobilenumber(updatedModel.getMobilenumber());
        existingModel.setEventname(updatedModel.getEventname());
        existingModel.setBudget(updatedModel.getBudget());
        existingModel.setTypeOfEvent(updatedModel.getTypeOfEvent());
        existingModel.setGame(updatedModel.getGame());
        existingModel.setFood(updatedModel.getFood());
        existingModel.setAnyQueries(updatedModel.getAnyQueries());

        return r.save(existingModel);
    } else {
        return null; // Not found
    }
}
      
}
