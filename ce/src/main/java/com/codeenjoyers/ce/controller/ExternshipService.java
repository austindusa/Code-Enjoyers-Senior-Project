package com.codeenjoyers.ce.controller;

import java.util.concurrent.ExecutionException;

import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.codeenjoyers.ce.model.Externship;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.CollectionReference;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.QueryDocumentSnapshot;
import com.google.cloud.firestore.QuerySnapshot;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;

@Service
public class ExternshipService {

    public String createExternship(Externship externship) throws ExecutionException, InterruptedException {
        Firestore db = FirestoreClient.getFirestore();
        // Add document data with auto-generated id.
        ApiFuture<DocumentReference> addedDocRef = db.collection("externships").add(externship);
         return "Added document with ID: " + addedDocRef.get().getId();
    }

    public Externship getExternshipByID(String refID) throws InterruptedException, ExecutionException {
        Firestore db = FirestoreClient.getFirestore();
        DocumentReference docRef = db.collection("externships").document(refID);
        // asynchronously retrieve the document
        ApiFuture<DocumentSnapshot> future = docRef.get();
        // block on response
        DocumentSnapshot document = future.get();
        Externship externship = null;
        if (document.exists()) {
        // convert document to POJO
            externship = document.toObject(Externship.class);
            return externship;
        } else {
            System.out.println("No such document!");
            return null;
        }
    }

    public Externship getExternshipByName(String externshipName) throws InterruptedException, ExecutionException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        CollectionReference collection = dbFirestore.collection("externships");
        com.google.cloud.firestore.Query query = collection.whereEqualTo("externshipName", externshipName);
        ApiFuture<QuerySnapshot> querySnapshot = query.get();
        List<QueryDocumentSnapshot> documents = querySnapshot.get().getDocuments();
        if (!documents.isEmpty()) {
            return documents.get(0).toObject(Externship.class);
        }
        return null;
    }

}
