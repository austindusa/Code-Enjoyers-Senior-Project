import { getDatabase, ref, push, set, onValue } from "firebase/database";

class SurveyDataService {
  constructor() {
    this.database = getDatabase();
    this.surveyResponsesRef = ref(this.database, 'Survey Answered Questions'); // Use a single reference for the survey response
    this.surveyCompletionCallback = null;
  }

  setSurveyCompletionCallback(callback) {
    this.surveyCompletionCallback = callback;
  }

  saveSurveyResponse(responseData) {
    return new Promise((resolve, reject) => {
      const newResponseRef = push(this.surveyResponsesRef); 
      set(newResponseRef, responseData)
        .then(() => {
          resolve("Survey data saved to Firebase");
          if (this.surveyCompletionCallback) {
            this.surveyCompletionCallback(true);
          }
        })
        .catch((error) => {
          reject(error);
          if (this.surveyCompletionCallback) {
            this.surveyCompletionCallback(false);
          }
        });
    });
  }

  listenForSurveyResponse() {
    onValue(this.surveyResponsesRef, (snapshot) => {
      const responses = snapshot.val();

      console.log("Received survey responses:", responses);
    });
  }
}

export default SurveyDataService;
