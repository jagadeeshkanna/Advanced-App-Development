package com.events.project1.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.events.project1.model.UserInfo;

import java.util.Optional;

public interface UserInfoRepository extends JpaRepository<UserInfo, Integer> {
    Optional<UserInfo> findByName(String username);
}
