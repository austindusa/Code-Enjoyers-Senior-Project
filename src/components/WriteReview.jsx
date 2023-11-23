import React from 'react'
import {useState} from 'react'
import {FaStar} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function WriteReview(props) {

    const writeReviewStyle = {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        backdropFilter: 'blur(2px)',
    }

    const writeReviewInnerStyle = {
        display: 'inline-flex',
        width: '40.0625rem',
        height: '36.3125rem',
        padding: '0.875rem 0.75rem',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '0.625rem',
        borderRadius: '0.9375rem',
        background: '#FFF',
    }

    const writeReviewTextStyle = {
        width: '38.9375rem',
        color: '#000',
        fontFamily: 'Roboto',
        fontSize: '1.5rem',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '140%',
    }

    const writeReviewQuestionTextStyle = {
        width: '35.75rem',
        height: '1.75rem',
        flexShrink: '0',
        overflow: 'hidden',
        color: '#000',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        fontFamily: 'Roboto',
        fontSize: '1rem',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: '150%',
    }

    const starFrameStyle = {
        display: 'flex',
        width: '4.70313',
        padding: '0.375rem 0.3125rem',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    }

    const [rating, setRating] = useState(null);

    const[hover, setHover] = useState(null);

    const starStyle = {
        cursor: 'pointer',
    }

    const radioLabelStyle = {
        color: 'var(--Black, #060606)',
        fontFamily: 'Roboto',
        fontSize: '0.625rem',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '150%',
        gap: '0.75rem',
    }

    const radioButtonStyle = {
        gap: '0.75rem',
    }

    const experienceStyle = {
        display: 'flex',
        width: '37.5rem',
        height: '11.25rem',
        padding: '0.75rem',
        alignItems: 'flex-start',
        flexShrink: '0',
        resize: 'none',
        margin: '1.0625rem 0rem',

        borderRadius: '0.625rem',
        border: '1px solid var(--Black, #060606)',
        background: 'var(--White, #FFF)',
    }

    const buttonContainer = {
        display: 'flex',
        width: '10.3125rem',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '0.625rem',

        position: 'absolute',
        right: '39.9375rem',
        bottom: '11.8125rem',
    }

    const writeReviewBtnStyle = {
        display: 'flex',
        width: '4.9375rem',
        height: '2.5305rem',
        padding: '0.75rem 1.5rem',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.5rem',

        borderRadius: '9.375rem',
        border: '1px solid var(--Black, #060606)',
        background: 'var(--Black, #060606)',

        color: 'var(--White, #FFF)',

        fontFamily: 'Roboto',
        fontSize: '0.625rem',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '150%',
    }

    const closeBtnStyle = {
        display: 'flex',
        padding: '0.75rem 1.5rem',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.5rem',

        position: 'absolute',
        right: '-0.125rem',
        top: '-0.0625rem',

        borderRadius: '9.375rem',
        border: '1px solid var(--Black, #060606)',
        background: 'var(--White, #FFF)',
        color: 'var(--White, #FFF)',

        color: 'var(--Black, #060606)',
        fontFamily: 'Roboto',
        fontSize: '0.625rem',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '150%',
        textDecorationLine: 'underline',
    }

    return (props.trigger)? (

        <div className="writeReview" style = {writeReviewStyle}>
            <div className="writeReview-inner" style = {writeReviewInnerStyle}>
                <div className="writeReview-text" style = {writeReviewTextStyle}>Adding New Review For:
                    <div className="writeReview-text" style = {writeReviewTextStyle}>Externship Title</div>
                    <div className="writeReviewQuestion-text" style = {writeReviewQuestionTextStyle}>What rating would you give this externship?</div>
                    <div className="starFrame" style = {starFrameStyle}>
                        <div className="starRating">
                            {[...Array(5)].map((star, index) => {
                                const currentRating = index + 1;
                                return (
                                <label>
                                    <input 
                                        type="radio"
                                        name="rating"
                                        style={{display: "none"}}
                                        value={currentRating}
                                        onClick={() => setRating(currentRating)}
                                    />
                                    <FaStar className='star' style = {starStyle} size={15} color={currentRating <= (hover || rating) ? "#000" : "#EEEEE0"} onMouseEnter={() => setHover(currentRating)} onMouseLeave={() => setHover(null)} />
                                </label>
                                );
                            })}
                        </div>
                    </div>
                    <div className="writeReviewQuestion-text" style = {writeReviewQuestionTextStyle}>Were you paid for doing this externship?</div>
                    <div className="yesNoButtons">
                        <input type = "radio" name = "paid" style = {radioButtonStyle}/> <label style = {radioLabelStyle}>No</label>
                        <input type = "radio" name = "paid" style = {radioButtonStyle}/> <label style = {radioLabelStyle}>Yes</label>
                    </div>
                    <div className="writeReviewQuestion-text" style = {writeReviewQuestionTextStyle}>Would you take this externship again if you could?</div>
                    <div className="yesNoButtons">
                        <input type = "radio" name = "again" style = {radioButtonStyle}/> <label style = {radioLabelStyle}>No</label>
                        <input type = "radio" name = "again" style = {radioButtonStyle}/> <label style = {radioLabelStyle}>Yes</label>
                    </div>
                    <div className="writeReviewQuestion-text" style = {writeReviewQuestionTextStyle}>Please share your overall experience participating in this externship.</div>
                    <textarea className="experience" style = {experienceStyle} placeholder='Type your message...'></textarea>
                    <div className="buttonContainer" style = {buttonContainer}>
                        <Link to="/login"><button className="writeReview-btn" style = {writeReviewBtnStyle}>Add Review</button></Link>
                        <button className="close-btn" style = {closeBtnStyle} onClick={() => props.setTrigger(false)}>Cancel</button>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>

    ) : "";
}

export default WriteReview