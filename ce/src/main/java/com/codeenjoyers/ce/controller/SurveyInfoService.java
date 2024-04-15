package com.codeenjoyers.ce.controller;

import org.springframework.stereotype.Service;

import java.util.LinkedList;
import java.util.concurrent.ExecutionException;
import java.util.List;

import com.codeenjoyers.ce.model.SurveyInfo;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.QueryDocumentSnapshot;
import com.google.cloud.firestore.QuerySnapshot;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;

@Service
public class SurveyInfoService {
    public String createSurveyInfo(SurveyInfo info) throws ExecutionException, InterruptedException {
        /*Firestore dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> collectionsApiFuture = dbFirestore.collection("info").document(info.getQuestion1()).set(info);
        return collectionsApiFuture.get().getUpdateTime().toString();*/

        Firestore db = FirestoreClient.getFirestore();
        // Add document data with auto-generated id.
        ApiFuture<DocumentReference> addedDocRef = db.collection("info").add(info);
         return "Added document with ID: " + addedDocRef.get().getId();
    }

    public SurveyInfo getSurveyInfo(String documentId) throws InterruptedException, ExecutionException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentReference documentReference = dbFirestore.collection("info").document(documentId);
        ApiFuture<DocumentSnapshot> future = documentReference.get();
        DocumentSnapshot document = future.get();
        SurveyInfo info;
        if (document.exists()) {
            info = document.toObject(SurveyInfo.class);
            return info;
        }
        return null;
    }

    /*public String updateSurveyInfo(SurveyInfo info) throws InterruptedException, ExecutionException {
        //Firestore dbFirestore = FirestoreClient.getFirestore();
        //ApiFuture<WriteResult> collecApiFuture = dbFirestore.collection("info").document(info.getQuestion1()).set(info);
        //return collecApiFuture.get().getUpdateTime().toString();

        Firestore db = FirestoreClient.getFirestore();
        // Add document data with auto-generated id.
        ApiFuture<DocumentReference> addedDocRef = db.collection("info").add(info);
         return "Added document with ID: " + addedDocRef.get().getId();
    }*/

    public String deleteSurveyInfo(String documentId) {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> writeResult = dbFirestore.collection("info").document(documentId).delete();
        return "Successfully deleted " + documentId;
    }
    public List<SurveyInfo> getAllSurveyInfos() throws InterruptedException, ExecutionException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        SurveyInfo info;
        List<SurveyInfo> infos = new LinkedList<SurveyInfo>();
        ApiFuture<QuerySnapshot> future = dbFirestore.collection("info").get();
        List<QueryDocumentSnapshot> documents = future.get().getDocuments();
        for(QueryDocumentSnapshot document : documents) {
            info = document.toObject(SurveyInfo.class);
            infos.add(info);
        }
        return infos;
    }
}
