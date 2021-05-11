import React from 'react';
import 'survey-react/survey.css';
import * as Survey from 'survey-react';
import json from '../surveys/questionOne';


const MySurvey= ()=>{
    return(
        <Survey.Survey
            onComplete={data=>console.log(data.valuesHash)}
            json={json}/>
    )
}

export default MySurvey;