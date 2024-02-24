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

import com.codeenjoyers.ce.model.SurveyInfo;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v2")
public class SurveyInfoController {

    private SurveyInfoService service;

    public SurveyInfoController(SurveyInfoService service) {
        this.service = service;
    }

    @PostMapping("/create") //create
    public String postMethodName(@RequestBody SurveyInfo info) throws ExecutionException, InterruptedException {
        return service.createSurveyInfo(info);
    }
    
    @GetMapping("/get") //get
    public SurveyInfo getMethodName(@RequestParam String documentId) throws InterruptedException, ExecutionException {
        return service.getSurveyInfo(documentId);
    }
    
    @PutMapping("/update") //update
    public String putMethodName(@RequestBody SurveyInfo info) throws InterruptedException, ExecutionException {
        return service.updateSurveyInfo(info);
    }
    
    @PutMapping("/delete") //delete
    public String deleteMethodName(@RequestParam String documentId) throws InterruptedException, ExecutionException {
        return service.deleteSurveyInfo(documentId);
    }
}
