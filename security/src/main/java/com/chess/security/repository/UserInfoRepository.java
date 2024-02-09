package com.chess.security.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.chess.security.entity.UserInfo;

import java.util.Optional;

public interface UserInfoRepository extends JpaRepository<UserInfo, Integer> {
    Optional<UserInfo> findByName(String username);
}
