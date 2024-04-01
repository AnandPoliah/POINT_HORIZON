package com.example.demo.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.UserEntity;
import com.example.demo.Service.UserService;

@RestController
public class UserController {
    
    @Autowired
    private UserService userService;

    @GetMapping("/getbuses")
    public List<UserEntity> getAllStudents() 
    {
        return userService.getBuses();
    }
    
    @GetMapping("/getbuses/{one}/{two}")
    public List<UserEntity> getAllStudents(@PathVariable String one,@PathVariable String two) 
    {
        return userService.getBuses(one,two);
    }
    

    @PostMapping("/postbuses")
    public String createStudent(@RequestBody List<UserEntity> user) {
        userService.saveUser(user);
        return "posted";
    }

    


}