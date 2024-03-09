package com.codeenjoyers.ce.controller;

import org.springframework.web.bind.annotation.RestController;

import com.codeenjoyers.ce.model.User;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.concurrent.ExecutionException;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class UserController {
    
    public UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    @PostMapping("/createUser")
    public String createUser(@RequestBody User user) throws ExecutionException, InterruptedException {
        return service.createUser(user);
    }

    @GetMapping("/getUserByEmail")
    public User getUserByEmail(@RequestParam String email) throws InterruptedException, ExecutionException {
        return service.getUserByEmail(email);           
    }

    @GetMapping("/getUserById")
    public User getUserById(@RequestParam String userId) throws InterruptedException, ExecutionException {
        return service.getUserById(userId);
    }

    @PostMapping("/validateSubscription")
    public boolean validateSubscription(@RequestParam String userID, @RequestParam boolean subscribed) throws InterruptedException, ExecutionException {
        return service.validateSubscription(userID, subscribed);
    }

    @PutMapping("/updatePassword")
    public String updatePassword(@RequestParam String userId, @RequestBody String newPassword) throws InterruptedException, ExecutionException {
        return service.updatePassword(userId, newPassword);
    }

    @PutMapping("/delete") //delete
    public String deleteMethodName(@RequestParam String documentId) throws InterruptedException, ExecutionException {
        return service.deleteUser(documentId);
    }

}
