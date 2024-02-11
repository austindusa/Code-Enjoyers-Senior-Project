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

	public static void main(String[] args) throws IOException {

		ClassLoader classLoader = CeApplication.class.getClassLoader();
		
		File file = new File(Objects.requireNonNull(classLoader.getResource("serviceAccountKey.json")).getFile());

		try {
			FileInputStream serviceAccount =
			new FileInputStream(file.getAbsolutePath());

			@SuppressWarnings("deprecation")
			FirebaseOptions options = new FirebaseOptions.Builder()
  			.setCredentials(GoogleCredentials.fromStream(serviceAccount))
  			.build();

			FirebaseApp.initializeApp(options);
			System.out.println("Service key found");
		} catch (Exception e) {
			System.out.println("An error occurred while fetching the service key");
			System.out.println(e.getMessage());
		}

		SpringApplication.run(CeApplication.class, args);
	}

}
