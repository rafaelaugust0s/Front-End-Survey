import React from 'react';
import 'survey-react/survey.css';
import * as Survey from 'survey-react';
import json from '../surveys/questionOne';
import axios from "axios";

const sendData= async (payload)=>{


        // const response = await axios.get('http://localhost:4000/api/customers',payload)
        await axios.get(`${process.env.REACT_APP_BACKEND_API}/customers`, payload)
        console.log(payload)

}

const MySurvey= ()=>{
    return(
        <Survey.Survey
            onComplete={data => sendData (data.valuesHash)}
            json={json}/>
            )
}

export default MySurvey;