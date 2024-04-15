package com.codeenjoyers.ce;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Objects;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;

@SpringBootApplication
public class CeApplication {

    public static void main(String[] args) {
        SpringApplication.run(CeApplication.class, args);
        initializeFirebase();
        uploadDataToFirestore();
    }

    private static void initializeFirebase() {
        try {
            ClassLoader classLoader = CeApplication.class.getClassLoader();
            File file = new File(Objects.requireNonNull(classLoader.getResource("")).getFile());

            FileInputStream serviceAccount = new FileInputStream(file.getAbsolutePath());

            FirebaseOptions options = new FirebaseOptions.Builder()
                    .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                    .build();

            FirebaseApp.initializeApp(options);
            System.out.println("Firebase initialized successfully with service key");
        } catch (Exception e) {
            System.out.println("An error occurred while initializing Firebase:");
            e.printStackTrace();
        }
    }

    private static void uploadDataToFirestore() {
        try {
            StudyData.uploadData("Cleaned_ExternshipStudy_Data.json");
            System.out.println("Data uploaded successfully to Firestore");
        } catch (Exception e) {
            System.out.println("An error occurred while uploading data to Firestore:");
            e.printStackTrace();
        }
    
    }
}
