package com.bala.events.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bala.events.model.Eventcreate;

public interface eventCreateRepo extends JpaRepository<Eventcreate,Long>{
    void deleteByEventName(String eventName);
}
