package com.events.project1.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

// import com.events.project1.model.ALoginsModel;
import com.events.project1.model.AEventsModel;
import com.events.project1.model.ALoginModel;
import com.events.project1.model.EventsModel1;
import com.events.project1.model.FeedbackModel;
import com.events.project1.model.LoginModel;
import com.events.project1.model.RegisterModel;
import com.events.project1.repository.AEventsRepo;
import com.events.project1.repository.ALoginRepo;
import com.events.project1.repository.EventsRepository;
import com.events.project1.repository.FeedbackRepo;
import com.events.project1.repository.LoginRepo;
import com.events.project1.repository.RegisterRepo;


@org.springframework.stereotype.Service
public class EventsService {


    @Autowired
      private ALoginRepo r;

    @Autowired
    private EventsRepository er;
    
    public boolean postMethodName(ALoginModel m) {
        return r.save(m) != null? true:false;
    }

       public List<ALoginModel> getAllBookings(){
        return r.findAll();
       }


       @Autowired
       private FeedbackRepo f;
   
     public boolean createfeedback(FeedbackModel o) {
         return f.save(o) != null? true:false;
     }
 
        public List<FeedbackModel> getAllfeedback(){
         return f.findAll();
        }


        @Autowired
        private LoginRepo l;
    
      public boolean createlogin(LoginModel p) {
          return l.save(p) != null? true:false;
      }
  
         public List<LoginModel> getAlllogin(){
          return l.findAll();
         }


         @Autowired
         private RegisterRepo t;
     
       public boolean createregister(RegisterModel wq) {
           return t.save(wq) != null? true:false;
       }
   
          public List<RegisterModel> getAllRegister(){
           return t.findAll();
          }


         @Autowired
         private AEventsRepo i;
     
       public boolean createaevent(AEventsModel pc) {
           return i.save(pc) != null? true:false;
       }
   
          public List<AEventsModel> getAllmodel(){
           return i.findAll();
          }


          @Autowired
          private EventsRepository v;
      
        public boolean createaeventmodel(EventsModel1 kl) {
            return v.save(kl) != null? true:false;
        }
    
           public List<EventsModel1> getAllaeventmodel(){
            return v.findAll();
           }



           public EventsModel1 updateBooking(String email, EventsModel1 updatedModel) {
            // Find the existing booking by email
            EventsModel1 existingModel = er.findByEmail(email);
            if (existingModel != null) {
                // Update the existing booking with the new information
                existingModel.setFirstname(updatedModel.getFirstname());
                existingModel.setLastname(updatedModel.getLastname());
                existingModel.setCompanyname(updatedModel.getCompanyname());
                existingModel.setCompanyaddress(updatedModel.getCompanyaddress());
                existingModel.setMobilenumber(updatedModel.getMobilenumber());
                existingModel.setEventname(updatedModel.getEventname());
                existingModel.setBudget(updatedModel.getBudget());
             
                // Save the updated booking
                return er.save(existingModel);
            } else {
                return null; // Booking with the provided email not found
            }
        }

       //delete

       public void deleteEntityByEventNameL(String email){
        er.deleteByEmail(email);
       }

}
















