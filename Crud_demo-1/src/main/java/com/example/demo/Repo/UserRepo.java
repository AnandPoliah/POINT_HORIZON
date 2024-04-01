package com.example.demo.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.UserEntity;

@Repository
public interface UserRepo extends JpaRepository<UserEntity,Integer> 
{
	@Modifying
	@Query("delete from UserEntity a where a.username like :name")
	void deletedatabyname(String name);
	
	 @Modifying
	 @Query("UPDATE UserEntity u SET u.password = :pass WHERE u.username = :username")
	 void updatePassByUsername(String username, String pass);
}
