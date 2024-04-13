import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

function GetStartedButton() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
    }, []);

    const checkSubscription = async (uid) => {
        const docRef = doc(getFirestore(), 'subscriptions', uid);
        const docSnap = await getDoc(docRef);
        return docSnap.exists() && docSnap.data().isSubscribed;
    };

    const handleGetStartedClick = async () => {
        if (loading) {
            // If still checking user status, do nothing or show a loading indicator
            return;
        }

        if (!user) {
            // Not signed in, redirect to login page
            navigate('/login');
        } else {
            // Check if the user is subscribed
            const isSubscribed = await checkSubscription(user.uid);
            if (isSubscribed) {
                // User is subscribed, redirect to result page
                navigate('/resultpage');
            } else {
                // User is not subscribed, redirect to subscription page
                navigate('/surveyplanpage');
            }
        }
    };

    const buttonStyle = {
        display: 'flex',
        padding: '1.5em 3em',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.5em',
        border: '1px solid var(--Black, #060606)',
        color: 'var(--Black, #060606)',
        marginTop: '7em',
        marginLeft: '5em',
    };

    return (
        <button className="getStarted" style={buttonStyle} onClick={handleGetStartedClick}>
            {loading ? 'Loading...' : 'Get Started'}
        </button>
    );
}

export default GetStartedButton;
