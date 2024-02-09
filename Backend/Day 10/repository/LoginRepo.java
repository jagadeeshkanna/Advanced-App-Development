package com.events.project1.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.events.project1.model.LoginModel;
import com.events.project1.model.RegisterModel;
public interface LoginRepo extends JpaRepository<LoginModel,Long>{

    Object save(RegisterModel wq);
}


