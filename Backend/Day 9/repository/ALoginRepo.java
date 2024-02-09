package com.events.project1.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;

import com.events.project1.model.ALoginModel;
import com.events.project1.model.EventsModel1;
public interface ALoginRepo extends JpaRepository<ALoginModel,Long>{

    // EventsModel1 findByEmail(String email);

    // ResponseEntity<EventsModel1> save(EventsModel1 existingModel);
}


