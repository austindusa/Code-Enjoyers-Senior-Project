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
    survey.applyTheme({
      "backgroundImage": "",
      "backgroundImageFit": "auto",
      "backgroundImageAttachment": "scroll",
      "backgroundOpacity": 1,
      "header": {
          "height": 256,
          "inheritWidthFrom": "survey",
          "textAreaWidth": 512,
          "overlapEnabled": false,
          "backgroundImageOpacity": 1,
          "backgroundImageFit": "cover",
          "logoPositionX": "right",
          "logoPositionY": "top",
          "titlePositionX": "left",
          "titlePositionY": "bottom",
          "descriptionPositionX": "left",
          "descriptionPositionY": "bottom"
      },
      "themeName": "doubleborder",
      "colorPalette": "light",
      "isPanelless": false,
      "cssVariables": {
          "--sjs-general-backcolor": "rgba(255, 255, 255, 1)",
          "--sjs-general-backcolor-dark": "rgba(239, 239, 239, 1)",
          "--sjs-general-backcolor-dim": "#f8f7f7",
          "--sjs-general-backcolor-dim-light": "rgba(255, 255, 255, 1)",
          "--sjs-general-backcolor-dim-dark": "rgba(237, 237, 237, 1)",
          "--sjs-general-forecolor": "rgba(0, 0, 0, 0.91)",
          "--sjs-general-forecolor-light": "rgba(0, 0, 0, 0.45)",
          "--sjs-general-dim-forecolor": "rgba(0, 0, 0, 0.91)",
          "--sjs-general-dim-forecolor-light": "rgba(0, 0, 0, 0.45)",
          "--sjs-primary-backcolor": "#201d1d",
          "--sjs-primary-backcolor-light": "rgba(NaN, NaN, NaN, 0.1)",
          "--sjs-primary-backcolor-dark": "rgba(NaN, NaN, NaN, 1)",
          "--sjs-primary-forecolor": "rgba(255, 255, 255, 1)",
          "--sjs-primary-forecolor-light": "rgba(255, 255, 255, 0.25)",
          "--sjs-base-unit": "8px",
          "--sjs-corner-radius": "4px",
          "--sjs-secondary-backcolor": "rgba(255, 152, 20, 1)",
          "--sjs-secondary-backcolor-light": "rgba(255, 152, 20, 0.1)",
          "--sjs-secondary-backcolor-semi-light": "rgba(255, 152, 20, 0.25)",
          "--sjs-secondary-forecolor": "rgba(255, 255, 255, 1)",
          "--sjs-secondary-forecolor-light": "rgba(255, 255, 255, 0.25)",
          "--sjs-shadow-small": "0px 1px 2px 0px rgba(0, 0, 0, 0.15)",
          "--sjs-shadow-small-reset": "0px 0px 0px 0px rgba(0, 0, 0, 0.15)",
          "--sjs-shadow-medium": "0px 0px 0px 2px rgba(0, 0, 0, 0.08),0px 2px 6px 0px rgba(0, 0, 0, 0.04)",
          "--sjs-shadow-large": "0px 8px 16px 0px rgba(0, 0, 0, 0.08)",
          "--sjs-shadow-inner": "0px 0px 0px 2px rgba(0, 0, 0, 0.1)",
          "--sjs-shadow-inner-reset": "0px 0px 0px 0px rgba(0, 0, 0, 0.1)",
          "--sjs-border-light": "rgba(0, 0, 0, 0.1)",
          "--sjs-border-default": "rgba(0, 0, 0, 0.1)",
          "--sjs-border-inside": "rgba(0, 0, 0, 0.16)",
          "--sjs-special-red": "rgba(229, 10, 62, 1)",
          "--sjs-special-red-light": "rgba(229, 10, 62, 0.1)",
          "--sjs-special-red-forecolor": "rgba(255, 255, 255, 1)",
          "--sjs-special-green": "rgba(25, 179, 148, 1)",
          "--sjs-special-green-light": "rgba(25, 179, 148, 0.1)",
          "--sjs-special-green-forecolor": "rgba(255, 255, 255, 1)",
          "--sjs-special-blue": "rgba(67, 127, 217, 1)",
          "--sjs-special-blue-light": "rgba(67, 127, 217, 0.1)",
          "--sjs-special-blue-forecolor": "rgba(255, 255, 255, 1)",
          "--sjs-special-yellow": "rgba(255, 152, 20, 1)",
          "--sjs-special-yellow-light": "rgba(255, 152, 20, 0.1)",
          "--sjs-special-yellow-forecolor": "rgba(255, 255, 255, 1)",
          "--sjs-article-font-xx-large-textDecoration": "none",
          "--sjs-article-font-xx-large-fontWeight": "700",
          "--sjs-article-font-xx-large-fontStyle": "normal",
          "--sjs-article-font-xx-large-fontStretch": "normal",
          "--sjs-article-font-xx-large-letterSpacing": "0",
          "--sjs-article-font-xx-large-lineHeight": "64px",
          "--sjs-article-font-xx-large-paragraphIndent": "0px",
          "--sjs-article-font-xx-large-textCase": "none",
          "--sjs-article-font-x-large-textDecoration": "none",
          "--sjs-article-font-x-large-fontWeight": "700",
          "--sjs-article-font-x-large-fontStyle": "normal",
          "--sjs-article-font-x-large-fontStretch": "normal",
          "--sjs-article-font-x-large-letterSpacing": "0",
          "--sjs-article-font-x-large-lineHeight": "56px",
          "--sjs-article-font-x-large-paragraphIndent": "0px",
          "--sjs-article-font-x-large-textCase": "none",
          "--sjs-article-font-large-textDecoration": "none",
          "--sjs-article-font-large-fontWeight": "700",
          "--sjs-article-font-large-fontStyle": "normal",
          "--sjs-article-font-large-fontStretch": "normal",
          "--sjs-article-font-large-letterSpacing": "0",
          "--sjs-article-font-large-lineHeight": "40px",
          "--sjs-article-font-large-paragraphIndent": "0px",
          "--sjs-article-font-large-textCase": "none",
          "--sjs-article-font-medium-textDecoration": "none",
          "--sjs-article-font-medium-fontWeight": "700",
          "--sjs-article-font-medium-fontStyle": "normal",
          "--sjs-article-font-medium-fontStretch": "normal",
          "--sjs-article-font-medium-letterSpacing": "0",
          "--sjs-article-font-medium-lineHeight": "32px",
          "--sjs-article-font-medium-paragraphIndent": "0px",
          "--sjs-article-font-medium-textCase": "none",
          "--sjs-article-font-default-textDecoration": "none",
          "--sjs-article-font-default-fontWeight": "400",
          "--sjs-article-font-default-fontStyle": "normal",
          "--sjs-article-font-default-fontStretch": "normal",
          "--sjs-article-font-default-letterSpacing": "0",
          "--sjs-article-font-default-lineHeight": "28px",
          "--sjs-article-font-default-paragraphIndent": "0px",
          "--sjs-article-font-default-textCase": "none",
          "--sjs-font-family": "Arial, sans-serif",
          "--sjs-header-backcolor": "transparent",
          "--sjs-question-background": "rgba(255, 255, 255, 1)",
          "--sjs-questionpanel-cornerRadius": "15px",
          "--sjs-font-pagedescription-family": "Arial, sans-serif",
          "--sjs-font-pagetitle-family": "Arial, sans-serif",
          "--sjs-font-questiontitle-family": "Arial, sans-serif",
          "--sjs-editor-background": "rgba(249, 249, 249, 1)",
          "--sjs-editorpanel-backcolor": "rgba(249, 249, 249, 1)",
          "--sjs-editorpanel-hovercolor": "rgba(243, 243, 243, 1)",
          "--sjs-editorpanel-cornerRadius": "15px",
          "--sjs-font-editorfont-family": "Arial, sans-serif",
          "--sjs-font-editorfont-placeholdercolor": "rgba(0, 0, 0, 0.45)"
      }
  });
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
