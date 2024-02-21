package com.codeenjoyers.ce;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.concurrent.ExecutionException;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.PathVariable;




@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class Controller {
    
    public CRUDService service;

    public Controller(CRUDService service) {
        this.service = service;
    }

    //Please Copy and Change these methods to fit the needs of the program

    @PostMapping("/create") //create
    public String postMethodName(@RequestBody CRUD crud) throws ExecutionException, InterruptedException {
        return service.createCRUD(crud);
    }
    
    @GetMapping("/get") //get
    public CRUD getMethodName(@RequestParam String documentId) throws InterruptedException, ExecutionException {
        return service.getCRUD(documentId);
    }
    
    @PutMapping("/update") //update
    public String putMethodName(@RequestBody CRUD crud) throws InterruptedException, ExecutionException {
        return service.updateCRUD(crud);
    }
    
    @PutMapping("/delete") //delete
    public String deleteMethodName(@RequestBody String entity) {
        return service.deleteCRUD(entity);
    }

}
