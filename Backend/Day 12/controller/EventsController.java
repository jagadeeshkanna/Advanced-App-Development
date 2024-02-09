package com.events.project1.controller;
 import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
// import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;
import com.events.project1.model.AEventsModel;
import com.events.project1.model.EventsModel1;
import com.events.project1.model.FeedbackModel;
import com.events.project1.model.LoginModel;
import com.events.project1.model.RegisterModel;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
// import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.events.project1.service.EventsService;
import com.events.project1.model.ALoginModel;
import java.util.List;
 //import com.bala.events.service.Service;
 
@CrossOrigin
@RestController
@RequestMapping("/products/map/event")


public class EventsController {

           @Autowired
                EventsService r;
           @Autowired
           EventsService er;
       //Post methodes

       @PostMapping("/post/createevent")
       public boolean createaevent(@RequestBody AEventsModel wp) {
            return r.createaevent(wp);
       }

    
        @PostMapping("/post/createalogin")
        public boolean postMethodName(@RequestBody ALoginModel cr) {
             return r.postMethodName(cr);
        }

        @PostMapping("/post/createfeedback")
        public boolean createfeedback(@RequestBody FeedbackModel ad) {
             return r.createfeedback(ad);
        }



        @PostMapping("/post/createlogin")
        public boolean createlogin(@RequestBody LoginModel bc) {
             return r.createlogin(bc);
        }


        @PostMapping("/post/createregister")
        public boolean createregister(@RequestBody RegisterModel dc) {
             return r.createregister(dc);
        }
        
        
        @PostMapping("/post/createeventmodel1")
        public boolean createeventmodel(@RequestBody EventsModel1 io) {
             return r.createaeventmodel(io);
        }
        
        //Get methodes
        @GetMapping("/bookings")
        public List<ALoginModel> getAllBookings(){
            return r.getAllBookings();
        }

           //Get methodes
           @GetMapping("/feedback")
           public List<FeedbackModel> getAllfeedback(){
               return r.getAllfeedback();
           }
        

           @GetMapping("/login")
           public List<LoginModel> getAlllogin(){
               return r.getAlllogin();
           }
        
           @GetMapping("/register")    
           public List<RegisterModel> getAllregister(){
               return r.getAllRegister();
           }

           @GetMapping("/aeventmodel")    
           public List<EventsModel1> getAllaeventmodel(){
               return r.getAllaeventmodel();
               // aeventmodel
           }


           @GetMapping("/model")    
           public List<AEventsModel> getAllmodel(){
               return r.getAllmodel();
               // aeventmodel
           }

           @PutMapping("/update/booking/{email}")
           public ResponseEntity<EventsModel1> updateBooking(@PathVariable String email, @RequestBody EventsModel1 updatedModel) {
               EventsModel1 updatedBooking = er.updateBooking(email, updatedModel);
               if (updatedBooking != null) {
                   return ResponseEntity.ok(updatedBooking);
               } else {
                   return ResponseEntity.notFound().build();
               }
           }

        
            //delete

            @Transactional
    @DeleteMapping("/del/booking/{email}")
public ResponseEntity<String> deleteByEmail(@PathVariable String email) {
    r.deleteEntityByEventNameL(email);
    return ResponseEntity.ok("booking is deleted");
}


}










