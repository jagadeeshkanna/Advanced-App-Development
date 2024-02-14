package com.bala.events.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import com.bala.events.model.Facility;

public interface Facilityrepo extends JpaRepository<Facility, Long> {
    @Transactional
    void deleteByFacility(String facility);
}
