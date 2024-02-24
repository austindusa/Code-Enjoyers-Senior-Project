import React, { useState, useEffect } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import SurveyDataService from '../SurveyDataService';


function SurveyComponent({ surveyJson }) {
  const [surveyModel, setSurveyModel] = useState(null);
  const [savedMessage, setSavedMessage] = useState("");
  const surveyDataService = new SurveyDataService();

  useEffect(() => {
    const survey = new Model(surveyJson);
    setSurveyModel(survey);

    survey.onValueChanged.add((sender, options) => {
      const surveyData = sender.data;
      surveyDataService.saveSurveyResponse(surveyData)
        .then(() => {
          console.log("Survey data saved to Firebase");
          setSavedMessage("Your survey response has been saved.");
        })
        .catch(error => {
          console.error("Error saving survey data:", error);
          setSavedMessage("There was an error saving your survey response. Please try again.");
        });
    });

    return () => {
      survey.onValueChanged.remove();
    };
  }, []); 

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {surveyModel && (
        <>
          <Survey model={surveyModel} />
          <div style={{
            position: 'absolute',
            bottom: '2px',
            left: '0',
            right: '0',
            textAlign: 'center',
            fontSize: '12px',
            color: 'gray'
          }}>
            {savedMessage && <p>{savedMessage}</p>}
          </div>
        </>
      )}
    </div>
  );
}

export default SurveyComponent;
