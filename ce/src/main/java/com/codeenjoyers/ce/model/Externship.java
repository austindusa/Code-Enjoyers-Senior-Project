package com.codeenjoyers.ce.model;

import java.util.List;
import java.util.Map;

public class Externship{
    private String externshipName;
    private int totalSurveys;
    private Map<String, QuestionData> surveyData;

    public Externship() {}

    public String getExternshipName() {
        return externshipName;
    }

    public void setExternshipName(String externshipName) {
        this.externshipName = externshipName;
    }

    public int getTotalSurveys() {
        return totalSurveys;
    }

    public void setTotalSurveys(int totalSurveys) {
        this.totalSurveys = totalSurveys;
    }

    public Map<String, QuestionData> getSurveyData() {
        return surveyData;
    }

    public void setSurveyData(Map<String, QuestionData> surveyData) {
        this.surveyData = surveyData;
    }
}

class QuestionData {
    private String type;
    private Object choices;
    private boolean hasOther;
    private Object other; 
    private int otherCount;

    public QuestionData() {}

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Object getChoices() {
        return choices;
    }

    public void setChoices(Object choices) {
        this.choices = choices;
    }

    public boolean isHasOther() {
        return hasOther;
    }

    public void setHasOther(boolean hasOther) {
        this.hasOther = hasOther;
    }

    public Object getOther() {
        return other;
    }

    public void setOther(Object other) {
        this.other = other;
    }

    public int getOtherCount() {
        return otherCount;
    }

    public void setOtherCount(int otherCount) {
        this.otherCount = otherCount;
    }
}
