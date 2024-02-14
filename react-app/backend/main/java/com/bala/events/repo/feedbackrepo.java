package com.bala.events.repo;

import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.transaction.annotation.Transactional;

import com.bala.events.model.Feedback;


public interface feedbackrepo extends JpaRepository<Feedback,Long>{
   

}
