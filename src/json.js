import { FunctionFactory } from "survey-core";

function isValidInput(input) {
    //letters, numbers, and common punctuation are allowed.
    var allowedPattern = /^[a-zA-Z0-9\s.,?!'"()]+$/;
  
    // Check if the input matches the allowed pattern
    if (allowedPattern.test(input)) {
      return true;
    } else {
      return false;
    }
  }

function isValidYear(yearString) {
    const year = parseInt(yearString, 10);
  
    if (!isNaN(year) && year >= 1990 && year <= new Date().getFullYear()) {
      return true;
    } else {
      return false;
    }
  }
  
FunctionFactory.Instance.register("isValidInput", isValidInput);
FunctionFactory.Instance.register("isValidYear", isValidYear);
  

export const reviewSurveyJson = {
    "storeOthersAsComment" : false,
    "logoPosition": "right",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "text",
        "name": "question2",
        "title": "Which year did/ will you graduate/ complete your externship?",
        "isRequired": true,
        "validators": [
         {
          "type": "expression",
          "text": "Please enter a valid year.",
          "expression": "isValidYear({question2})",
         }
        ],
        "inputType": "number",
        "autocomplete": "bday-year",
        "maxLength": 4,
        "placeholder": "YYYY"
       },
       {
        "type": "radiogroup",
        "name": "question3",
        "title": "Is/was your externship in the US?",
        "isRequired": true,
        "choices": [
         "Yes",
         "No"
        ]
       },
       {
        "type": "text",
        "name": "question4",
        "title": "If not, where was your externship located?",
        "enableIf": "{question3} = 'No'",
        "isRequired": true,
        "validators": [
            {
             "type": "expression",
             "text": "Please enter a valid answer containing only letters, numbers, or common punctuation.",
             "expression": "isValidInput({question4})",
            }
           ],
       },
       {
        "type": "text",
        "name": "question5",
        "title": "City of Externship?",
        "isRequired": true,
        "validators": [
            {
             "type": "expression",
             "text": "Please enter a valid answer containing only letters, numbers, or common punctuation.",
             "expression": "isValidInput({question5})",
            }
           ],
       },
       {
        "type": "text",
        "name": "question6",
        "title": "Externship State or Territory?",
        "enableIf": "{question3} = 'Yes'",
        "isRequired": true,
        "validators": [
            {
             "type": "expression",
             "text": "Please enter a valid answer containing only letters, numbers, or common punctuation.",
             "expression": "isValidInput({question6})",
            }
           ],
       },
       {
        "type": "radiogroup",
        "name": "question7",
        "title": "Duration of Externship? (months)",
        "isRequired": true,
        "choices": [
         "<9 months",
         "9 months",
         "12 months",
         ">12 months"
        ]
       },
       {
        "type": "radiogroup",
        "name": "question8",
        "title": "Number of days per week?",
        "isRequired": true,
        "validators": [
            {
             "type": "expression",
             "text": "Please enter a valid answer containing only letters, numbers, or common punctuation.",
             "expression": "isValidInput({question8})",
            }
           ],
        "choices": [
         "3",
         "4",
         "5"
        ],
        "showOtherItem": true,
        "otherPlaceholder": "Please enter a number",
        "otherText": "Other:",
        "otherErrorText": "Response required: enter a number"
       },
       {
        "type": "radiogroup",
        "name": "question9",
        "title": "Hours per day?",
        "isRequired": true,
        "validators": [
            {
             "type": "expression",
             "text": "Please enter a valid answer containing only letters, numbers, or common punctuation.",
             "expression": "isValidInput({question9})",
            }
           ],
        "choices": [
         "8",
         "10"
        ],
        "showOtherItem": true,
        "otherPlaceholder": "Please enter a number",
        "otherText": "Other:"
       }
      ],
      "title": "Externship Details"
     },
     {
      "name": "page2",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question10",
        "title": "Was compensation provided?",
        "isRequired": true,
        "choices": [
         "Yes",
         "No"
        ]
       },
       {
        "type": "radiogroup",
        "name": "question11",
        "title": "Annual Compensation:",
        "enableIf": "{question10} = 'Yes'",
        "isRequired": true,
        "choices": [
         "<$10,000",
         "$10,001 - $20,000",
         "$20,001 - $30,000",
         "$30,001 - $40,000",
         "$40,001 - $50,000",
         "$50,001 - $60,000",
         ">$60,000"
        ]
       },
       {
        "type": "radiogroup",
        "name": "question12",
        "title": "How was compensation distributed?",
        "enableIf": "{question10} = 'Yes'",
        "isRequired": true,
        "validators": [
            {
             "type": "expression",
             "text": "Please enter a valid answer containing only letters, numbers, or common punctuation.",
             "expression": "isValidInput({question12})",
            }
           ],
        "choices": [
         "Weekly",
         "Bi-weekly",
         "Monthly"
        ],
        "showOtherItem": true
       },
       {
        "type": "radiogroup",
        "name": "question13",
        "title": "Does the student get health insurance or other benefits?",
        "isRequired": true,
        "choices": [
         "Yes",
         "No"
        ]
       },
       {
        "type": "comment",
        "name": "question14",
        "title": "If yes, could you provide details?",
        "enableIf": "{question13} = 'Yes'",
        "isRequired": true,
        "validators": [
            {
             "type": "expression",
             "text": "Please enter a valid answer containing only letters, numbers, or common punctuation.",
             "expression": "isValidInput({question14})",
            }
           ],
       }
      ],
      "title": "Compensation"
     },
     {
      "name": "page3",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question15",
        "title": "How many preceptors do you have?",
        "isRequired": true,
        "choices": [
         "1-2",
         "3-5",
         "5-10",
         ">10"
        ]
       },
       {
        "type": "radiogroup",
        "name": "question16",
        "title": "Preceptors and CCC-A",
        "isRequired": true,
        "choices": [
         "All preceptors have CCC-A",
         "Some preceptors have CCC-A",
         "None of the preceptors have CCC-A",
         "I am not sure if the preceptors have their CCCs"
        ]
       },
       {
        "type": "radiogroup",
        "name": "question17",
        "title": "Preceptor's background:",
        "isRequired": true,
        "validators": [
            {
             "type": "expression",
             "text": "Please enter a valid answer containing only letters, numbers, or common punctuation.",
             "expression": "isValidInput({question17})",
            }
           ],
        "choices": [
         "All preceptors have AuD",
         "All preceptors have MA in Audiology",
         "Some preceptors have AuD and some have MA in audiology"
        ],
        "showOtherItem": true
       },
       {
        "type": "radiogroup",
        "name": "question18",
        "title": "Feedback style of preceptors - Feedback is provided:",
        "isRequired": true,
        "validators": [
            {
             "type": "expression",
             "text": "Please enter a valid answer containing only letters, numbers, or common punctuation.",
             "expression": "isValidInput({question18})",
            }
           ],
        "choices": [
         "If asked by students",
         "On the spot during appointments",
         "At the end of each appointment",
         "At the end of each day",
         "By the coordinator at the end of each month",
         "At the end of each rotation",
         "At mid-semester and then end of the externship"
        ],
        "showOtherItem": true
       },
       {
        "type": "text",
        "name": "question19",
        "title": "How supported did you feel during the externship?",
        "isRequired": true,
        "validators": [
            {
             "type": "expression",
             "text": "Please enter a valid answer containing only letters, numbers, or common punctuation.",
             "expression": "isValidInput({question19})",
            }
           ],
       }
      ],
      "title": "Preceptors"
     },
     {
      "name": "page4",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question20",
        "title": "The clinic population is mainly:",
        "isRequired": true,
        "validators": [
            {
             "type": "expression",
             "text": "Please enter a valid answer containing only letters, numbers, or common punctuation.",
             "expression": "isValidInput({question20})",
            }
           ],
        "choices": [
         "Only adults",
         "Pediatric-focused (80% or more Pediatrics)",
         "Adult-Pediatric (80% or more Adults)",
         "Mix of adult and pediatric"
        ],
        "showOtherItem": true
       },
       {
        "type": "checkbox",
        "name": "question21",
        "title": "How diverse is the clientele? Check all the racial and ethnic identities seen in the clinic:",
        "isRequired": true,
        "choices": [
         "American Indian or Alaska Native",
         "Asian",
         "Black or African American",
         "Hispanic or Latino",
         "Native Hawaiian or Other Pacific Islander",
         "White"
        ],
        "minSelectedChoices": 1
       },
       {
        "type": "checkbox",
        "name": "question22",
        "title": "Predominantly which population is seen in the clinic (select any 2):",
        "isRequired": true,
        "choices": [
         "American Indian or Alaska Native",
         "Asian",
         "Black or African American",
         "Hispanic or Latino",
         "Native Hawaiian or Other Pacific Islander",
         "White"
        ],
        "maxSelectedChoices": 2,
        "minSelectedChoices": 2
       },
       {
        "type": "checkbox",
        "name": "question23",
        "title": "How diverse is the clientele? Check all the socioeconomic categories seen in the clinic (to the best of your knowledge/ perception):",
        "isRequired": true,
        "choices": [
         "Lower class",
         "Middle class",
         "Upper/ high class"
        ],
        "minSelectedChoices": 1
       },
       {
        "type": "radiogroup",
        "name": "question24",
        "title": "Predominantly which population is seen in the clinic- (to the best of your knowledge/ perception)",
        "isRequired": true,
        "choices": [
         "Lower class",
         "Middle class",
         "Upper/ high class"
        ]
       }
      ],
      "title": "Externship Patient Demographics"
     },
     {
      "name": "page5",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question25",
        "title": "Does the clinic have rotations for specialties such as vestibular, cochlear implants, etc.",
        "isRequired": true,
        "choices": [
         "Yes",
         "No"
        ]
       },
       {
        "type": "comment",
        "name": "question26",
        "title": "Please provide more details about each rotation:",
        "enableIf": "{question25} = 'Yes'",
        "isRequired": true,
        "validators": [
            {
             "type": "expression",
             "text": "Please enter a valid answer containing only letters, numbers, or common punctuation.",
             "expression": "isValidInput({question26})",
            }
           ],
       },
       {
        "type": "checkbox",
        "name": "question27",
        "title": "Please select which of the following experiences are provided to students:",
        "isRequired": true,
        "validators": [
            {
             "type": "expression",
             "text": "Please enter a valid answer containing only letters, numbers, or common punctuation.",
             "expression": "isValidInput({question27})",
            }
           ],
        "choices": [
         "Routine audiological testing (Audiometry + immittance)",
         "Hearing aid consultation",
         "Hearing aid fitting",
         "Hearing aid follow up",
         "ABR",
         "Other electrophysiological measures such as ASSR, EcochG",
         "OAE",
         "CPA",
         "VRA",
         "CAPD testing",
         "Tinnitus evaluation",
         "Tinnitus management",
         "Vestibular testing",
         "Vestibular rehabilitation",
         "CI evaluation",
         "CI activation and follow up",
         "Aural rehabilitation",
         "Group rehabilitation",
         "Intra-operative monitoring"
        ],
        "showOtherItem": true
       }
      ],
      "title": "Experiences Details"
     },
     {
      "name": "page6",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question28",
        "title": "Routine audiological testing (Audiometry + immittance):",
        "isRequired": true,
        "choices": [
         "Everyday",
         "2-3 times a week",
         "Once a week",
         "1-2 times in 2 weeks",
         "1-2 times a month",
         "1-2 times in a few months",
         "1-2 times in the year"
        ]
       },
       {
        "type": "radiogroup",
        "name": "question29",
        "title": "Hearing aid consultation:",
        "isRequired": true,
        "choices": [
         "Everyday",
         "2-3 times a week",
         "Once a week",
         "1-2 times in 2 weeks",
         "1-2 times a month",
         "1-2 times in a few months",
         "1-2 times in the year"
        ]
       },
       {
        "type": "radiogroup",
        "name": "question30",
        "title": "Hearing aid fitting:",
        "isRequired": true,
        "choices": [
         "Everyday",
         "2-3 times a week",
         "Once a week",
         "1-2 times in 2 weeks",
         "1-2 times a month",
         "1-2 times in a few months",
         "1-2 times in the year"
        ]
       },
       {
        "type": "radiogroup",
        "name": "question31",
        "title": "Hearing aid follow up:",
        "isRequired": true,
        "choices": [
         "Everyday",
         "2-3 times a week",
         "Once a week",
         "1-2 times in 2 weeks",
         "1-2 times a month",
         "1-2 times in a few months",
         "1-2 times in the year"
        ]
       },
       {
        "type": "radiogroup",
        "name": "question32",
        "title": "ABR:",
        "isRequired": true,
        "choices": [
         "Everyday",
         "2-3 times a week",
         "Once a week",
         "1-2 times in 2 weeks",
         "1-2 times a month",
         "1-2 times in a few months",
         "1-2 times in the year"
        ]
       },
       {
        "type": "radiogroup",
        "name": "question33",
        "title": "Other electrophysiological measures such as ASSR, EcochG:",
        "isRequired": true,
        "choices": [
         "Everyday",
         "2-3 times a week",
         "Once a week",
         "1-2 times in 2 weeks",
         "1-2 times a month",
         "1-2 times in a few months",
         "1-2 times in the year"
        ]
       },
       {
        "type": "radiogroup",
        "name": "question34",
        "title": "OAEs:",
        "isRequired": true,
        "choices": [
         "Everyday",
         "2-3 times a week",
         "Once a week",
         "1-2 times in 2 weeks",
         "1-2 times a month",
         "1-2 times in a few months",
         "1-2 times in the year"
        ]
       },
       {
        "type": "radiogroup",
        "name": "question35",
        "title": "CPA:",
        "isRequired": true,
        "choices": [
         "Everyday",
         "2-3 times a week",
         "Once a week",
         "1-2 times in 2 weeks",
         "1-2 times a month",
         "1-2 times in a few months",
         "1-2 times in the year"
        ]
       },
       {
        "type": "radiogroup",
        "name": "question36",
        "title": "VRA:",
        "isRequired": true,
        "choices": [
         "Everyday",
         "2-3 times a week",
         "Once a week",
         "1-2 times in 2 weeks",
         "1-2 times a month",
         "1-2 times in a few months",
         "1-2 times in the year"
        ]
       },
       {
        "type": "radiogroup",
        "name": "question37",
        "title": "CAPD testing:",
        "isRequired": true,
        "choices": [
         "Everyday",
         "2-3 times a week",
         "Once a week",
         "1-2 times in 2 weeks",
         "1-2 times a month",
         "1-2 times in a few months",
         "1-2 times in the year"
        ]
       },
       {
        "type": "radiogroup",
        "name": "question38",
        "title": "Tinnitus evaluation:",
        "isRequired": true,
        "choices": [
         "Everyday",
         "2-3 times a week",
         "Once a week",
         "1-2 times in 2 weeks",
         "1-2 times a month",
         "1-2 times in a few months",
         "1-2 times in the year"
        ]
       },
       {
        "type": "radiogroup",
        "name": "question39",
        "title": "Tinnitus management:",
        "isRequired": true,
        "choices": [
         "Everyday",
         "2-3 times a week",
         "Once a week",
         "1-2 times in 2 weeks",
         "1-2 times a month",
         "1-2 times in a few months",
         "1-2 times in the year"
        ]
       },
       {
        "type": "radiogroup",
        "name": "question40",
        "title": "Vestibular testing:",
        "isRequired": true,
        "choices": [
         "Everyday",
         "2-3 times a week",
         "Once a week",
         "1-2 times in 2 weeks",
         "1-2 times a month",
         "1-2 times in a few months",
         "1-2 times in the year"
        ]
       },
       {
        "type": "radiogroup",
        "name": "question41",
        "title": "Vestibular rehabilitation:",
        "isRequired": true,
        "choices": [
         "Everyday",
         "2-3 times a week",
         "Once a week",
         "1-2 times in 2 weeks",
         "1-2 times a month",
         "1-2 times in a few months",
         "1-2 times in the year"
        ]
       },
       {
        "type": "radiogroup",
        "name": "question42",
        "title": "CI evaluation:",
        "isRequired": true,
        "choices": [
         "Everyday",
         "2-3 times a week",
         "Once a week",
         "1-2 times in 2 weeks",
         "1-2 times a month",
         "1-2 times in a few months",
         "1-2 times in the year"
        ]
       },
       {
        "type": "radiogroup",
        "name": "question43",
        "title": "CI activation and follow up:",
        "isRequired": true,
        "choices": [
         "Everyday",
         "2-3 times a week",
         "Once a week",
         "1-2 times in 2 weeks",
         "1-2 times a month",
         "1-2 times in a few months",
         "1-2 times in the year"
        ]
       },
       {
        "type": "radiogroup",
        "name": "question44",
        "title": "Aural rehabilitation:",
        "isRequired": true,
        "choices": [
         "Everyday",
         "2-3 times a week",
         "Once a week",
         "1-2 times in 2 weeks",
         "1-2 times a month",
         "1-2 times in a few months",
         "1-2 times in the year"
        ]
       },
       {
        "type": "radiogroup",
        "name": "question45",
        "title": "Group rehabilitation",
        "isRequired": true,
        "choices": [
         "Everyday",
         "2-3 times a week",
         "Once a week",
         "1-2 times in 2 weeks",
         "1-2 times a month",
         "1-2 times in a few months",
         "1-2 times in the year"
        ]
       },
       {
        "type": "radiogroup",
        "name": "question46",
        "title": "Intra-operative monitoring:",
        "isRequired": true,
        "choices": [
         "Everyday",
         "2-3 times a week",
         "Once a week",
         "1-2 times in 2 weeks",
         "1-2 times a month",
         "1-2 times in a few months",
         "1-2 times in the year"
        ]
       }
      ],
      "title": "Frequency of Experiences ",
      "description": "What is the frequency of the experiences listed below"
     },
     {
      "name": "page7",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question47",
        "title": "How long does the student shadow their preceptor(s)?",
        "isRequired": true,
        "validators": [
            {
             "type": "expression",
             "text": "Please enter a valid answer containing only letters, numbers, or common punctuation.",
             "expression": "isValidInput({question47})",
            }
           ],
        "choices": [
         "2-3 days",
         "1 week",
         "1 week in each rotation",
         "1 month",
         "1 month in each rotation",
         "Depends on the student and the supervisor"
        ],
        "showOtherItem": true
       },
       {
        "type": "radiogroup",
        "name": "question48",
        "title": "After what duration are students independent (see patients by themselves without supervisor in the room)?",
        "isRequired": true,
        "validators": [
            {
             "type": "expression",
             "text": "Please enter a valid answer containing only letters, numbers, or common punctuation.",
             "expression": "isValidInput({question48})",
            }
           ],
        "choices": [
         "<1month",
         "1-2 months",
         "3-4 months",
         "5-6 months",
         "7-8 months",
         "Never"
        ],
        "showOtherItem": true
       },
       {
        "type": "radiogroup",
        "name": "question49",
        "title": "Do students have independent schedules?",
        "isRequired": true,
        "choices": [
         "Yes",
         "No"
        ]
       },
       {
        "type": "radiogroup",
        "name": "question50",
        "title": "Number of sites and student placement in each site: Which of the following is true about the site:",
        "isRequired": true,
        "validators": [
            {
             "type": "expression",
             "text": "Please enter a valid answer containing only letters, numbers, or common punctuation.",
             "expression": "isValidInput({question50})",
            }
           ],
        "choices": [
         "Placed in one primary center/ externship has one site.",
         "Externship has multiple sites with student at a different site everyday.",
         "Externship has multiple sites with student at a different site for a whole specialty rotation."
        ],
        "showOtherItem": true
       },
       {
        "type": "radiogroup",
        "name": "question51",
        "title": "Are hearing aid technicians or other staff available for support?",
        "isRequired": true,
        "validators": [
            {
             "type": "expression",
             "text": "Please enter a valid answer containing only letters, numbers, or common punctuation.",
             "expression": "isValidInput({question51})",
            }
           ],
        "choices": [
         "Staff handle the hearing device/ ear impression/ other new hearing device check-ins and other coordination.",
         "Staff are primarily for appointment scheduling and patient check-ins."
        ],
        "showOtherItem": true
       }
      ],
      "title": "Site Information"
     },
     {
      "name": "page8",
      "elements": [
       {
        "type": "checkbox",
        "name": "question52",
        "title": "Which professionals does the clinic routinely collaborate with (daily or multiple times a week)?",
        "isRequired": true,
        "validators": [
            {
             "type": "expression",
             "text": "Please enter a valid answer containing only letters, numbers, or common punctuation.",
             "expression": "isValidInput({question52})",
            }
           ],
        "choices": [
         "Educational Audiologist",
         "ENT",
         "SLP",
         "Neurologist",
         "Social Worker",
         "Nurse",
         "Psychologist",
         "Teachers",
         "Physical Therapist",
         "Occupational Therapist",
         "HOH teachers",
         "None"
        ],
        "showOtherItem": true,
        "minSelectedChoices": 1
       },
       {
        "type": "radiogroup",
        "name": "question53",
        "title": "How often are meetings conducted with inter-professional colleagues?",
        "isRequired": true,
        "validators": [
            {
             "type": "expression",
             "text": "Please enter a valid answer containing only letters, numbers, or common punctuation.",
             "expression": "isValidInput({question53})",
            }
           ],
        "choices": [
         "Weekly",
         "Bi-weekly",
         "Monthly",
         "Once a quarter",
         "Bi-annually",
         "Annually",
         "Never"
        ],
        "showOtherItem": true,
        "otherText": "Other:"
       },
       {
        "type": "radiogroup",
        "name": "question54",
        "title": "How often are meetings held within the department?",
        "isRequired": true,
        "validators": [
            {
             "type": "expression",
             "text": "Please enter a valid answer containing only letters, numbers, or common punctuation.",
             "expression": "isValidInput({question54})",
            }
           ],
        "choices": [
         "Weekly",
         "Bi-weekly",
         "Monthly",
         "Once a quarter",
         "Bi-annually",
         "Annually",
         "Never"
        ],
        "showOtherItem": true,
        "otherText": "Other:"
       },
       {
        "type": "text",
        "name": "question55",
        "title": "What is the extern's expected contribution to the meetings?",
        "isRequired": true,
        "validators": [
            {
             "type": "expression",
             "text": "Please enter a valid answer containing only letters, numbers, or common punctuation.",
             "expression": "isValidInput({question55})",
            }
           ],
       }
      ],
      "title": "Inter-disciplinary Collaborations"
     },
     {
      "name": "page9",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question56",
        "title": "Are research opportunities available?",
        "isRequired": true,
        "choices": [
         "Yes",
         "No"
        ]
       },
       {
        "type": "radiogroup",
        "name": "question57",
        "title": "Is research required?",
        "enableIf": "{question56} = 'Yes'",
        "isRequired": true,
        "choices": [
         "Yes",
         "No"
        ]
       },
       {
        "type": "radiogroup",
        "name": "question58",
        "title": "Is there time allotted for research or is it something on top of clinical hours?",
        "enableIf": "{question56} = 'Yes'",
        "isRequired": true,
        "choices": [
         "Yes",
         "It is on top of clinical hours."
        ]
       },
       {
        "type": "radiogroup",
        "name": "question59",
        "title": "Research opportunities involve:",
        "enableIf": "{question56} = 'Yes'",
        "isRequired": true,
        "choices": [
         "Assisting on ongoing research projects",
         "Creating own research project",
         "Clinical case study-based projects"
        ]
       },
       {
        "type": "radiogroup",
        "name": "question60",
        "title": "Is time off provided to attend conferences?",
        "isRequired": true,
        "validators": [
            {
             "type": "expression",
             "text": "Please enter a valid answer containing only letters, numbers, or common punctuation.",
             "expression": "isValidInput({question60})",
            }
           ],
        "choices": [
         "Yes",
         "No"
        ],
        "showOtherItem": true
       },
       {
        "type": "comment",
        "name": "question61",
        "title": "Are there continuing education opportunities? Please describe.",
        "isRequired": true,
        "validators": [
            {
             "type": "expression",
             "text": "Please enter a valid answer containing only letters, numbers, or common punctuation.",
             "expression": "isValidInput({question61})",
            }
           ],
       }
      ],
      "title": "Research"
     },
     {
      "name": "page10",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question62",
        "title": "Where is/was the externship advertised?",
        "isRequired": true,
        "validators": [
            {
             "type": "expression",
             "text": "Please enter a valid answer containing only letters, numbers, or common punctuation.",
             "expression": "isValidInput({question62})",
            }
           ],
        "choices": [
         "HearCareers",
         "ASHA website",
         "Own website",
         "Indeed",
         "Glassdoor",
         "Word of mouth"
        ],
        "showOtherItem": true,
        "otherText": "Other:"
       },
       {
        "type": "text",
        "name": "question63",
        "title": "What is the specialty/most attractive feature of this externship?",
        "isRequired": true,
        "validators": [
            {
             "type": "expression",
             "text": "Please enter a valid answer containing only letters, numbers, or common punctuation.",
             "expression": "isValidInput({question63})",
            }
           ],
       },
       {
        "type": "text",
        "name": "question64",
        "title": "What are the weaknesses of this externship?",
        "isRequired": true,
        "validators": [
            {
             "type": "expression",
             "text": "Please enter a valid answer containing only letters, numbers, or common punctuation.",
             "expression": "isValidInput({question64})",
            }
           ],
       },
       {
        "type": "radiogroup",
        "name": "question65",
        "title": "Details about lunch breaks:",
        "isRequired": true,
        "validators": [
            {
             "type": "expression",
             "text": "Please enter a valid answer containing only letters, numbers, or common punctuation.",
             "expression": "isValidInput({question65})",
            }
           ],
        "choices": [
         "Pre-determined time for lunch breaks when patients are not scheduled.",
         "Lunch time is flexible and student needs to manage to have lunch between patients.",
         "Lunch is generally with other coworkers."
        ],
        "showOtherItem": true
       },
       {
        "type": "radiogroup",
        "name": "question66",
        "title": "Is the externship site looking to hire students post-externship?",
        "isRequired": true,
        "choices": [
         "Yes",
         "No"
        ]
       }
      ],
      "title": "General Questions"
     },
     {
      "name": "page11",
      "elements": [
       {
        "type": "text",
        "name": "question67",
        "title": "What is the cost of living in the area?",
        "isRequired": true,
        "validators": [
            {
             "type": "expression",
             "text": "Please enter a valid answer containing only letters, numbers, or common punctuation.",
             "expression": "isValidInput({question67})",
            }
           ],
       },
       {
        "type": "text",
        "name": "question68",
        "title": "Is there affordable housing in the area and how is it found?",
        "isRequired": true,
        "validators": [
            {
             "type": "expression",
             "text": "Please enter a valid answer containing only letters, numbers, or common punctuation.",
             "expression": "isValidInput({question68})",
            }
           ],
       }
      ],
      "title": "Details about Clinic Area"
     }
    ],
    "widthMode": "responsive"
   }

   export const externshipSurveyJson = JSON.parse(JSON.stringify(reviewSurveyJson))
   externshipSurveyJson.pages[0].elements.unshift(
       {
           "type": "text",
           "name": "question1",
           "title": "Externship Site Name:",
           "isRequired": true,
           "validators": [
            {
             "type": "text",
             "minLength": 3,
             "maxLength": 50,
             "allowDigits": false
            }
           ],
           "autocomplete": "organization-title"
          },
   );