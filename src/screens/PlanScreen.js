import React from 'react';
import './PlanScreen.css'
import {useNavigate} from 'react-router-dom';
const PlanScreen=()=>{
    const navigate=useNavigate();
    const f=()=>{
        navigate('/');
    }

    return (
        <>
        <div className="planScreen">
        <div className="one">
        <h4>Premium<br />4k+HDR</h4>
        <button onClick={f}>Subscribe</button>
        </div>
        <div className="two">
        <h4>Basic<br />720p</h4>
        <button onClick={f}>Subscribe</button>
        </div>
        <div className="one">
        <h4>Standard<br />1080p</h4>
        <button onClick={f}>Subscribe</button>
        </div>
        </div>
        </>
    )
}
export default PlanScreen;