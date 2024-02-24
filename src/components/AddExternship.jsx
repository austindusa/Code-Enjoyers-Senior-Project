import React from 'react'
import SurveyComponent from './SurveyComponent'
import {externshipSurveyJson} from '../json'

function AddExternship(props) {

    return (props.trigger)? (
                
        <div className="addExternship">
            <div className="addExternship-inner">
                <div className="addExternship-text">Add a new externship opportunity to our database:
                <div className="scrollableContainer" style={{ maxHeight: '650px', overflowY: 'auto' }}>           
                        <SurveyComponent surveyJson={externshipSurveyJson} />
                </div>
                <div>
                    <button className="close-btn" onClick={() => props.setTrigger(false)}>Cancel</button>
                    {props.children}
                </div>
                </div>
            </div>
        </div>
        
    ) : "";
}

export default AddExternship