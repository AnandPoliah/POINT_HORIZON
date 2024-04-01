package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.UserEntity;
import com.example.demo.Repo.UserRepo;

import jakarta.transaction.Transactional;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;

    public List<UserEntity> getBuses() {
        return userRepo.findAll();
    }

    public void saveUser(List<UserEntity> user) {
        userRepo.saveAll(user);
    }

	public List<UserEntity> getBuses(String one,String two) 
	{
		
		return userRepo.findbyrequest(one,two);
	}
	
	



   
}