package com.bala.events.repo;

import org.springframework.data.jpa.repository.JpaRepository;


import com.bala.events.model.Signup;

public interface Signuprepo extends JpaRepository<Signup,Long>{

}
