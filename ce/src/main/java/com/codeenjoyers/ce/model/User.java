package com.codeenjoyers.ce.model;

import java.util.List;

public class User {

    private String id; 
    private String email;
    private String passwordHash;
    private boolean emailVerified; // Field to indicate email confirmation
    private boolean subscriber;
    private List<SurveyInfo> submittedSurveys;
    private List<SurveyInfo> savedSurveys;

    public User() {
    }

    public User(String id, String email, String passwordHash) {
        this.id = id;
        this.email = email;
        this.passwordHash = passwordHash;
        this.emailVerified = emailVerified; // Initialize the emailVerified field
        this.subscriber = subscriber;
        this.submittedSurveys = submittedSurveys;
        this.savedSurveys = savedSurveys;
    }

    // Getters and setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPasswordHash() {
        return passwordHash;
    }

    public void setPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
    }

    public boolean isEmailVerified() {
        return emailVerified;
    }

    public void setEmailVerified(boolean emailVerified) {
        this.emailVerified = emailVerified;
    }

    public boolean getSubscriberStatus() {
        return emailVerified;
    }

    public void setSubscriberStatus(boolean subscriber) {
        this.subscriber = subscriber;
    }

    public List<SurveyInfo> getSubmittedSurveys() {
        return submittedSurveys;
    }

    public void setSubmittedSurveys(List<SurveyInfo> submittedSurveys) {
        this.submittedSurveys = submittedSurveys;
    }

    public List<SurveyInfo> getSavedSurveys() {
        return savedSurveys;
    }

    public void setSavedSurveys(List<SurveyInfo> savedSurveys) {
        this.savedSurveys = savedSurveys;
    }

}

