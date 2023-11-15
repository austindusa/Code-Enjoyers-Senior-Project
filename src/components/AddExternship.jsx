import React from 'react'

function AddExternship(props) {

    return (props.trigger)? (
                
        <div className="addExternship">
            <div className="addExternship-inner">
                <div className="addExternship-text">Add a new externship opportunity to our database:
                    <div className="addExternshipQuestion-text">Please take the time to fill out the inofrmation below carefully and accurately.</div>
                    <div className="addExternshipQuestion-text">Who is offering this externship?</div>
                        <input className='addExternshipInput' type="text" placeholder='Text'/>
                    <div className="addExternshipQuestion-text">What is the title of this externship?</div>
                    <div className="addExternshipInputs">
                        <input className='addExternshipInput' type="text" placeholder='Text'/>
                    </div>
                    <div className="addExternshipQuestion-text">Where is this externship located?</div>
                        <input className='addExternshipInput' type="text" placeholder='City, State'/>
                    <div className="addExternshipQuestion-text">Could you add a description of this externship? Preferably the description from the source.</div>
                        <textarea className='addExternshipInputDesc' type="text" placeholder='Type your message...'></textarea>
                    <div>
                        <button className="addExternship-btn">Add Externship</button>
                        <button className="close-btn" onClick={() => props.setTrigger(false)}>Cancel</button>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
        
    ) : "";
}

export default AddExternship