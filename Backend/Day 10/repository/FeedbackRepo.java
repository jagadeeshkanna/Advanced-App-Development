package com.events.project1.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.events.project1.model.FeedbackModel;
public interface FeedbackRepo extends JpaRepository<FeedbackModel,Long>{
}


