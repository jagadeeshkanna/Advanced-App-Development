package com.events.project1.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;

import com.events.project1.model.EventsModel1;

public interface EventsRepository extends JpaRepository<EventsModel1,Long>{

    EventsModel1 findByEmail(String email);

    void deleteByEmail(String email);

    
}


