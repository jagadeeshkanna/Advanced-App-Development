package com.bala.events.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.bala.events.model.Model;

import jakarta.transaction.Transactional;

public interface Repo extends JpaRepository<Model, Long> {

    @Transactional
    void deleteByEmail(String email);

    Object findByEmail(String email);
}
