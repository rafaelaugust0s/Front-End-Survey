import React from "react";

let json = {
    "title": "Personal Information For Tax Declaration Purposes",
    "pages": [
        {
            "name": "page1",
            "navigationTitle": "Customer",
            "navigationDescription": "Customer's info",
            "elements": [
                // {
                //     "type": "image",
                //     "name": "first_page_image",
                //     "imageLink": "/Content/Images/examples/covid/01.png",
                //     "imageFit": "none",
                //     "imageHeight": 726,
                //     "imageWidth": 500,
                //     "width": "600px"
                // },
                {
                    "type": "panel",
                    "name": "first_page_container_panel",
                    "elements": [

                    {
                            "type": "panel",
                            "name": "Customer info",
                            "elements": [
                                {
                                    "type": "text",
                                    "name": "name ",
                                    "title": "Name"
                                },

                                {
                                    "type": "text",
                                    "name": "email",
                                    "title": "Email",
                                    "inputType": "email"
                                },

                                {
                                                    "type": "panel",
                                                    "name": "DOB",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "name": "dateOfBirth",
                                                            "visibleIf": "{case_identifier_information_patient_date_of_birth_checkbox} empty",
                                                            "titleLocation": "hidden",
                                                            "inputType": "date"
                                                        }, {
                                                            "type": "checkbox",
                                                            "name": "DOB",
                                                            "startWithNewLine": false,
                                                            "titleLocation": "hidden",
                                                            "choices": ["Unknown"]
                                                        }
                                                    ],
                                                    "title": "Date of Birth"
                                },
                            ],
                            "title": "Customer Information",
                            "showNumber": true,
                            "showQuestionNumbers": "off"
                        },
                        {
                            "type": "text",
                            "name": "address ",
                            "title": "Address"
                        },
                        {
                            "type": "text",
                            "name": "postalCode ",
                            "title": "Postal Code"
                        },   {
                            "type": "text",
                            "name": "city ",
                            "title": "City"
                        },{
                            "type": "text",
                            "name": "province ",
                            "title": "Province"
                        },{
                            "type": "text",
                            "name": "phone",
                            "title": "Phone"
                        },{
                            "type": "text",
                            "name": "sin",
                            "title": "SIN"
                        },
                        {
                            "type": "panel",
                            "name": "current_status_panel",
                            "elements": [
                                {
                                    "type": "boolean",
                                    "name": "current_status",
                                    "titleLocation": "hidden",
                                    "labelTrue": "Single",
                                    "labelFalse": "Married",
                                    "hideNumber": true
                                }
                            ],
                            "title": "Current Status",
                            "showNumber": false
                        },
                        {
                            type: "dropdown",
                            name: "maritalStatus",
                            title: "What is your marital status?",
                            "visibleIf": "{current_status} = false",

                            isRequired: true,
                            colCount: 0,
                            choices: [
                                "single",
                                "married",
                                "divorced",
                                "common-law",
                                "widower",
                            ]
                        },


                    ],
                        "startWithNewLine": false

                },

            ]

        },
        {
            "name": "page2",
            "navigationTitle": "Marital Status",
            "navigationDescription": "Spouse Info",
            "elements": [
                {
                    "type": "boolean",
                    "name": "Marital Status",
                    "title": "Are you single?",
                    "isRequired": true,
                    "labelTrue": "Yes",
                    "labelFalse": "No",
                    "hideNumber": true
                },
                // {
        //             "type": "panel",
        //             "name": "case_identifier_information ",
        //             "elements": [
        //                 {
        //                     "type": "text",
        //                     "name": "given_names",
        //                     "title": "Given name(s)"
        //                 }, {
        //                     "type": "text",
        //                     "name": "family_name",
        //                     "startWithNewLine": false,
        //                     "title": "Family name"
        //                 }, {
        //                     "type": "radiogroup",
        //                     "name": "case_identifier_information_sex",
        //                     "startWithNewLine": false,
        //                     "title": "Sex",
        //                     "choices": [
        //                         {
        //                             "value": "item1",
        //                             "text": "Male"
        //                         }, {
        //                             "value": "item2",
        //                             "text": "Female"
        //                         }, {
        //                             "value": "item3",
        //                             "text": "Not known"
        //                         }
        //                     ],
        //                     "colCount": 3
        //
        //                 }, {
        //                     "type": "text",
        //                     "name": "case_identifier_information_patient_telephone_mobile_number",
        //                     "title": "Telephone (mobile) number",
        //                     "inputType": "tel"
        //                 }, {
        //                     "type": "panel",
        //                     "name": "case_identifier_information_patient_age",
        //                     "elements": [
        //                         {
        //                             "type": "text",
        //                             "name": "case_identifier_information_patient_age_years",
        //                             "visibleIf": "{case_identifier_information_patient_age_checkbox} empty",
        //                             "title": "Years:",
        //                             "titleLocation": "left",
        //                             "inputType": "number"
        //                         }, {
        //                             "type": "text",
        //                             "name": "case_identifier_information_patient_age_months",
        //                             "visibleIf": "{case_identifier_information_patient_age_checkbox} empty",
        //                             "startWithNewLine": false,
        //                             "title": "Months:",
        //                             "titleLocation": "left",
        //                             "inputType": "number"
        //                         }, {
        //                             "type": "checkbox",
        //                             "name": "case_identifier_information_patient_age_checkbox",
        //                             "startWithNewLine": false,
        //                             "titleLocation": "hidden",
        //                             "choices": ["Unknown"]
        //                         }
        //                     ],
        //                     "title": "Age (years, months) "
        //                 }, {
        //                     "type": "text",
        //                     "name": "case_identifier_information_patient_email",
        //                     "title": "Email",
        //                     "inputType": "email"
        //                 }, {
        //                     "type": "text",
        //                     "name": "case_identifier_information_patient_address",
        //                     "startWithNewLine": false,
        //                     "title": "Address"
        //                 }, {
        //                     "type": "text",
        //                     "name": "case_identifier_information_patient_national_social_number",
        //                     "startWithNewLine": false,
        //                     "title": "National social number/ identifier (if applicable)"
        //                 }, {
        //                     "type": "dropdown",
        //                     "name": "case_identifier_information_patient_country_of_residence",
        //                     "title": "Country of residence",
        //                     "choices": [
        //                         "item1", "item2", "item3"
        //                     ],
        //                     "choicesByUrl": {
        //                         "url": "https://restcountries.eu/rest/v2/all",
        //                         "valueName": "name"
        //                     }
        //                 }, {
        //                     "type": "radiogroup",
        //                     "name": "case_identifier_information_patient_case_status",
        //                     "startWithNewLine": false,
        //                     "title": "Case status",
        //                     "choices": [
        //                         {
        //                             "value": "item1",
        //                             "text": "Suspected"
        //                         }, {
        //                             "value": "item2",
        //                             "text": "Probable"
        //                         }, {
        //                             "value": "item3",
        //                             "text": "Confirmed"
        //                         }
        //                     ],
        //                     "colCount": 3
        //                 }
                    ],
        //             "visibleIf": "{is_the_person_providing_the_information_is_the_patient} = true",
        //             "title": "Case Identifier Information",
        //             "showNumber": true,
        //             "showQuestionNumbers": "off"
        //         }, {
        //             "type": "panel",
        //             "name": "interview_respondent_information_if_the_persons_providing_the_information_is_not_the_patient",
        //             "elements": [
        //                 {
        //                     "type": "text",
        //                     "name": "first_name",
        //                     "title": "First name "
        //                 }, {
        //                     "type": "text",
        //                     "name": "surname",
        //                     "startWithNewLine": false,
        //                     "title": "Surname"
        //                 }, {
        //                     "type": "radiogroup",
        //                     "name": "interview_respondent_information_sex",
        //                     "startWithNewLine": false,
        //                     "title": "Sex",
        //                     "choices": [
        //                         {
        //                             "value": "item1",
        //                             "text": "Male"
        //                         }, {
        //                             "value": "item2",
        //                             "text": "Female"
        //                         }, {
        //                             "value": "item3",
        //                             "text": "Not known"
        //                         }
        //                     ],
        //                     "colCount": 3
        //                 }, {
        //                     "type": "panel",
        //                     "name": "interview_respondent_information_patient_date_of_birth_panel",
        //                     "elements": [
        //                         {
        //                             "type": "text",
        //                             "name": "interview_respondent_information_patient_date_of_birth_date",
        //                             "visibleIf": "{interview_respondent_information_patient_date_of_birth_checkbox} empty",
        //                             "titleLocation": "hidden",
        //                             "inputType": "date"
        //                         }, {
        //                             "type": "checkbox",
        //                             "name": "interview_respondent_information_patient_date_of_birth_checkbox",
        //                             "startWithNewLine": false,
        //                             "titleLocation": "hidden",
        //                             "choices": ["Unknown"]
        //                         }
        //                     ],
        //                     "title": "Date of Birth"
        //                 }, {
        //                     "type": "text",
        //                     "name": "relationship_to_patient",
        //                     "title": "Relationship to patient"
        //                 }, {
        //                     "type": "text",
        //                     "name": "respondent_address",
        //                     "startWithNewLine": false,
        //                     "title": "Respondent address"
        //                 }, {
        //                     "type": "text",
        //                     "name": "interview_respondent_information_patient_telephone_mobile_number",
        //                     "startWithNewLine": false,
        //                     "title": "Telephone (mobile) number",
        //                     "inputType": "tel"
        //                 }
        //             ],
        //             "visibleIf": "{is_the_person_providing_the_information_is_the_patient} = false",
        //             "title": "Interview respondent information",
        //             "showNumber": true,
        //             "showQuestionNumbers": "off"
        //         }
        //     ]
        // }, {
        //     "name": "page3",
        //     "navigationTitle": "Dependents",
        //     "navigationDescription": "Dependents Info",
        //     "elements": [
        //         {
        //             "type": "boolean",
        //             "name": " Dependents?",
        //             "title": "DO you have any dependents?",
        //             "isRequired": true,
        //             "labelTrue": "Yes",
        //             "labelFalse": "No",
        //             "hideNumber": true
        //         },
        //         {
        //             "type": "image",
        //             "name": "third_page_image",
        //             "imageLink": "/Content/Images/examples/covid/03.png",
        //             "imageHeight": 690,
        //             "imageWidth": 500,
        //             "width": "600px"
        //         },
        //         {
        //             "type": "panel",
        //             "name": "customers with dependents",
        //             "elements": [
        //                 {
        //                     "type": "panel",
        //                     "name": "date_of_first_symptom_onset",
        //                     "elements": [
        //                         {
        //                             "type": "text",
        //                             "name": "date_of_first_symptom_onset_date",
        //                             "enableIf": "{date_of_first_symptom_onset_checkbox} empty",
        //                             "titleLocation": "hidden",
        //                             "inputType": "date",
        //                             "width": "314px"
        //                         }, {
        //                             "type": "checkbox",
        //                             "name": "date_of_first_symptom_onset_checkbox",
        //                             "startWithNewLine": false,
        //                             "titleLocation": "hidden",
        //                             "choices": [
        //                                 {
        //                                     "value": "item1",
        //                                     "text": "No symptoms",
        //                                     "enableIf": "{date_of_first_symptom_onset_checkbox} <> ['item2']"
        //                                 }, {
        //                                     "value": "item2",
        //                                     "text": "Unknown",
        //                                     "enableIf": "{date_of_first_symptom_onset_checkbox} <> ['item1']"
        //                                 }
        //                             ],
        //                             "colCount": 2
        //                         }, {
        //                             "type": "radiogroup",
        //                             "name": "question1",
        //                             "title": "Fever (≥38 °C) or history of fever ",
        //                             "titleLocation": "left",
        //                             "choices": [
        //                                 {
        //                                     "value": "item1",
        //                                     "text": "Yes"
        //                                 }, {
        //                                     "value": "item2",
        //                                     "text": "No"
        //                                 }, {
        //                                     "value": "item3",
        //                                     "text": "Unknown"
        //                                 }
        //                             ],
        //                             "colCount": 3
        //                         }
        //                     ],
        //                     "title": "Date of first symptom onset"
        //                 }, {
        //                     "type": "radiogroup",
        //                     "name": "sore_throat",
        //                     "title": "Sore throat",
        //                     "titleLocation": "left",
        //                     "choices": [
        //                         {
        //                             "value": "item1",
        //                             "text": "Yes"
        //                         }, {
        //                             "value": "item2",
        //                             "text": "No"
        //                         }, {
        //                             "value": "item3",
        //                             "text": "Unknown"
        //                         }
        //                     ],
        //                     "colCount": 3
        //                 }, {
        //                     "type": "radiogroup",
        //                     "name": "runny_nose",
        //                     "title": "Runny nose",
        //                     "titleLocation": "left",
        //                     "choices": [
        //                         {
        //                             "value": "item1",
        //                             "text": "Yes"
        //                         }, {
        //                             "value": "item2",
        //                             "text": "No"
        //                         }, {
        //                             "value": "item3",
        //                             "text": "Unknown"
        //                         }
        //                     ],
        //                     "colCount": 3
        //                 }, {
        //                     "type": "radiogroup",
        //                     "name": "cough",
        //                     "title": "Cough",
        //                     "titleLocation": "left",
        //                     "choices": [
        //                         {
        //                             "value": "item1",
        //                             "text": "Yes"
        //                         }, {
        //                             "value": "item2",
        //                             "text": "No"
        //                         }, {
        //                             "value": "item3",
        //                             "text": "Unknown"
        //                         }
        //                     ],
        //                     "colCount": 3
        //                 }, {
        //                     "type": "radiogroup",
        //                     "name": "shortness_of_Breath",
        //                     "title": "Shortness of Breath",
        //                     "titleLocation": "left",
        //                     "choices": [
        //                         {
        //                             "value": "item1",
        //                             "text": "Yes"
        //                         }, {
        //                             "value": "item2",
        //                             "text": "No"
        //                         }, {
        //                             "value": "item3",
        //                             "text": "Unknown"
        //                         }
        //                     ],
        //                     "colCount": 3
        //                 }, {
        //                     "type": "radiogroup",
        //                     "name": "vomiting",
        //                     "title": "Vomiting",
        //                     "titleLocation": "left",
        //                     "choices": [
        //                         {
        //                             "value": "item1",
        //                             "text": "Yes"
        //                         }, {
        //                             "value": "item2",
        //                             "text": "No"
        //                         }, {
        //                             "value": "item3",
        //                             "text": "Unknown"
        //                         }
        //                     ],
        //                     "colCount": 3
        //                 }, {
        //                     "type": "radiogroup",
        //                     "name": "nausea",
        //                     "title": "Nausea",
        //                     "titleLocation": "left",
        //                     "choices": [
        //                         {
        //                             "value": "item1",
        //                             "text": "Yes"
        //                         }, {
        //                             "value": "item2",
        //                             "text": "No"
        //                         }, {
        //                             "value": "item3",
        //                             "text": "Unknown"
        //                         }
        //                     ],
        //                     "colCount": 3
        //                 }, {
        //                     "type": "radiogroup",
        //                     "name": "diarrhea",
        //                     "title": "Diarrhea",
        //                     "titleLocation": "left",
        //                     "choices": [
        //                         {
        //                             "value": "item1",
        //                             "text": "Yes"
        //                         }, {
        //                             "value": "item2",
        //                             "text": "No"
        //                         }, {
        //                             "value": "item3",
        //                             "text": "Unknown"
        //                         }
        //                     ],
        //                     "colCount": 3
        //                 }
        //             ],
        //             "title": "Patient symptoms (from disease onset)",
        //             "startWithNewLine": false,
        //             "showNumber": true,
        //             "showQuestionNumbers": "off"
        //         }
        //     ]

        }, {
            "name": "page7",
            "navigationTitle": "Completion",
            "navigationDescription": "Status of form",
            "elements": [

                {
                    "type": "panel",
                    "name": "status_of_form_completion_panel",
                    "elements": [
                        {
                            "type": "boolean",
                            "name": "status_of_form_completion_boolean",
                            "title": "Form completed",
                            "isRequired": true,
                            "labelTrue": "Yes",
                            "labelFalse": "No or partially"
                        }, {
                            "type": "radiogroup",
                            "name": "status_of_form_completion_radio",
                            "visibleIf": "{status_of_form_completion_boolean} = false",
                            "title": "Reason:",
                            "hasOther": true,
                            "choices": [
                                {
                                    "value": "item1",
                                    "text": "Missed"
                                }, {
                                    "value": "item2",
                                    "text": "Not attempted"
                                }, {
                                    "value": "item3",
                                    "text": "Not performed"
                                }, {
                                    "value": "item4",
                                    "text": "Refusal"
                                }
                            ],
                            "otherText": "Other, specific:"
                        }
                    ],
                    // "title": "Status of form completion",
                    // "startWithNewLine": false,
                    // "showNumber": true,
                    // "showQuestionNumbers": "off"
                }
            ]
        }
    ],
    "showProgressBar": "top",
    "progressBarType": "buttons"
};

export default json;