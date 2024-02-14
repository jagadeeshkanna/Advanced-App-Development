package com.bala.events.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import com.bala.events.service.Service;

import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.transaction.annotation.Transactional;
import com.bala.events.model.Eventcreate;
import com.bala.events.model.Facility;
import com.bala.events.model.Feedback;
import com.bala.events.model.Login;
import com.bala.events.model.Model;
import com.bala.events.model.Signup;

import java.util.List;
// import org.springframework.web.bind.annotation.RequestParam;

 //import com.bala.events.service.Service;
@CrossOrigin
@RestController
@RequestMapping("/products/map/event")

public class controller {
           @Autowired
            Service r;
            @Autowired
            Service er;
            @Autowired
            Service facilityservice;
            @Autowired
            Service feedbackservice;
            @Autowired
            Service loginservice;
            @Autowired
            Service signupservice;
   //Post methodes
//    @Tag(description = "Post the data's",name = "Post Users")
@Tag(name="BOOKING")
@PostMapping("/post/booking")
public String createBook(@RequestBody Model m) {
    return r.createBook(m);
}

@Tag(name="EVENTS")
    @PostMapping("/post/createevent")
    public String postMethodName(@RequestBody Eventcreate cr) {
         return er.CreateEvent(cr);
    }
   @Tag(name="FACILITY") 
    @PostMapping("/post/facility")
        public String postFacility(@RequestBody Facility f){
           
            return facilityservice.postFacility(f);
        }
@Tag(name="FEEDBACK")
    @PostMapping("/post/feedback")
    public String postFeedback(@RequestBody Feedback fb){
        return feedbackservice.postFeedback(fb);
    }
    
    @PostMapping("/post/login")
    public String postLogin(@RequestBody Login l){
        return loginservice.postLogin(l);
    }
    
    @PostMapping("/post/signup")
    public String postSignup(@RequestBody Signup s){
        return signupservice.postSignup(s);
    }

    //Get methodes
    @Tag(name="BOOKING")
    @GetMapping("/getbookings")
    public List<Model> getAllBookings(){
        return r.getAllBookings();
    }
    @Tag(name="EVENTS")
    @GetMapping("/getevents")
    public List<Eventcreate> getAllEvents(){
        return r.getAllEvents();
    }
    @Tag(name="FACILITY") 
    @GetMapping("/getfacility")
    public List<Facility> getAllFacilities(){
        return r.getAllFacilities();
    }
    @Tag(name="FEEDBACK")
    @GetMapping("/getfeedback")
    public List<Feedback> getAllFeedbacks(){
        return r.getAllFeedbacks();
    }

    @GetMapping("/getlogin")
    public List<Login> getAllLogins(){
        return r.getAllLogins();
    }
    
    @GetMapping("/getsignup")
    public List<Signup> getAllSignups(){
        return r.getAllSignups();
    }
    //delete events
    @Tag(name="EVENTS")
   @Transactional
   @DeleteMapping("/del/{eventName}")
    public ResponseEntity<String> deleteEntityByEventName(@PathVariable String eventName) {
        r.deleteEntityByEventName(eventName);
        return ResponseEntity.ok("eventName deleted successfully");
        }

        @Tag(name="FACILITY") 
    @DeleteMapping("/del/facility/{facility}")
    public ResponseEntity<String> deleteByFacility(@PathVariable String facility){
    r.deleteEntityFacility(facility);
    return ResponseEntity.ok("facility is deleted");
}

@Tag(name="BOOKING")
    @Transactional
    @DeleteMapping("/del/booking/{email}")
public ResponseEntity<String> deleteByEmail(@PathVariable String email) {
    r.deleteEntityByEventNameL(email);
    return ResponseEntity.ok("booking is deleted");
}


//put(update)
@Tag(name="BOOKING")
@PutMapping("/update/booking/{email}")
public ResponseEntity<Model> updateBooking(@PathVariable String email, @RequestBody Model updatedModel) {
    Model result = r.updateBooking(email, updatedModel);
    
    if (result != null) {
        return ResponseEntity.ok(result);
    } else {
        return ResponseEntity.notFound().build();
    }
}




}
