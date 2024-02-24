import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";

function SurveyComponent({ surveyJson }) {
  const survey = new Model(surveyJson);
  
  survey.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3));
  });

  return <Survey model={survey} />;
}

export default SurveyComponent;
