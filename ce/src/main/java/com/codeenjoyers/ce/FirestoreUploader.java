package com.codeenjoyers.ce;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonParser;
import com.google.cloud.firestore.Firestore;
import com.google.firebase.cloud.FirestoreClient;
import com.google.gson.Gson;

import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.Map;

public class FirestoreUploader {
    public static void uploadData(String resourcePath) throws Exception {
        InputStream inputStream = FirestoreUploader.class.getClassLoader().getResourceAsStream(resourcePath);
        if (inputStream == null) {
            throw new IllegalStateException("Cannot find file: " + resourcePath);
        }

        JsonElement jsonElement = JsonParser.parseReader(new InputStreamReader(inputStream));
        JsonArray jsonArray = jsonElement.getAsJsonArray();
        Firestore db = FirestoreClient.getFirestore();

        int index = 1; // Start index from 1 for better readability in IDs
        for (JsonElement element : jsonArray) {
            Map<String, Object> originalData = new Gson().fromJson(element, Map.class);
            Map<String, Object> formattedData = new HashMap<>();

            // Format keys and copy values
            originalData.forEach((key, value) -> {
                String formattedKey = key.trim().toLowerCase().replace(" ", "").replace("question", "question");
                formattedData.put(formattedKey, value);
            });

            // Generate document ID as 'survey' followed by the index without zero padding
            String docId = "survey" + index++;  // This generates IDs like "survey1", "survey2", etc.
            db.collection("info").document(docId).set(formattedData).get();
        }
    }
}
