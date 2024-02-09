package com.events.project1.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.events.project1.model.RegisterModel;
public interface RegisterRepo extends JpaRepository<RegisterModel,Long>{
}


