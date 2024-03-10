package com.codeenjoyers.ce.controller;

import java.util.concurrent.ExecutionException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.codeenjoyers.ce.model.Externship;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v3")
public class ExternshipController {

    private ExternshipService service;

    public ExternshipController(ExternshipService service) {
        this.service = service;
    }

    @PostMapping("/createExternship") 
    public String postMethodName(@RequestBody Externship externship) throws ExecutionException, InterruptedException {
        return service.createExternship(externship);
    }
    
    @GetMapping("/getExternshipByID") 
    public Externship getMethodID(@RequestParam String refID) throws InterruptedException, ExecutionException {
        return service.getExternshipByID(refID);
    }

    @GetMapping("/getExternshipByName")
    public Externship getMethodName(@RequestParam String externshipName) throws InterruptedException, ExecutionException {
        return service.getExternshipByName(externshipName);
    }
    
    
}
