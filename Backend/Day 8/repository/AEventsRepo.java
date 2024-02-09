package com.events.project1.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.events.project1.model.AEventsModel;
import com.events.project1.model.EventsModel1;
public interface AEventsRepo extends JpaRepository<AEventsModel,Long>{

    Object save(EventsModel1 kl);

    // Object save(EventsModel1 kl);
}


