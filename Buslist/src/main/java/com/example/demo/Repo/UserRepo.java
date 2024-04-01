package com.example.demo.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.Entity.UserEntity;

public interface UserRepo extends JpaRepository<UserEntity, Integer> 
{

	@Query("SELECT u FROM UserEntity u WHERE u.fromplace = :one and u.toplace = :two")
	List<UserEntity> findbyrequest(String one, String two);
	
	
	

}