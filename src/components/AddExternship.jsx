import React, { useEffect } from 'react';
import SurveyComponent from './SurveyComponent';
import { externshipSurveyJson } from '../json';


function AddExternship({ trigger, setTrigger, children }) {
  useEffect(() => {
    if (trigger) {
      document.body.style.overflow = 'hidden';
    } else {

      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [trigger]); 

  if (!trigger) return null;

  return (
    <div className="addExternship" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1000
      }}>
      <div className="addExternship-inner">
        <div className="addExternship-text">
          Add a new externship opportunity to our database:
          <div className="scrollableContainer" style={{ maxHeight: '650px', overflowY: 'auto' }}>
            <SurveyComponent surveyJson={externshipSurveyJson} />
          </div>
          <div>
            <button className="close-btn" onClick={() => setTrigger(false)}>Cancel</button>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddExternship;
