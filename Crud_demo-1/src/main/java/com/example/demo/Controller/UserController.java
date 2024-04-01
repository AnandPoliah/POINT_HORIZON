package com.example.demo.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.UserEntity;
import com.example.demo.Service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController 
{
	@Autowired
	public UserService us;
	
	@GetMapping("/getuser")
	public List<UserEntity> getdata()
	{
		return us.getUser();
	}
	
	@PostMapping("/saveuser")
	public UserEntity saveuser(@RequestBody UserEntity ue)
	{
		return us.saveuser(ue);
	}
	

	@DeleteMapping("deletebyname/{name}")
	public void deletebyname(@PathVariable String name)
	{
		us.deletebyname(name);
	}
	
	@PutMapping("/updateuser/{username}")
	public void updateUserByUsername(@PathVariable String username, @RequestBody String updatedUser) 
	{
	    us.updatePassByUsername(username, updatedUser);
	}

}
