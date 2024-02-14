package com.bala.events.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bala.events.model.Login;

public interface Loginrepo extends JpaRepository<Login,Long>{

}
