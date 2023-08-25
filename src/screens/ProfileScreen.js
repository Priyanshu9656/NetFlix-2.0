import React from 'react';
import Nav from '../Nav';
import './ProfileScreen.css';
import {useSelector} from 'react-redux';
import {selectUser} from "../features/userSlice";
import { firebaseAuth } from '../firebase';
import { signOut } from 'firebase/auth';
import PlanScreen from './PlanScreen';

const ProfileScreen=()=>{
    const user=useSelector(selectUser);
    return(
        <div className="profileScreen">
        <Nav />
        <div className="profileScreen_body">
            <h1>Edit Profile</h1>
            <div className="profileScreen_info">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
                <div className="profileScreen_details">
                    <h2>{user.email}</h2>
                    <div className="profileScreen_plans">
                    <h3>Plans</h3>
                    <PlanScreen />
                        <button onClick={()=>signOut(firebaseAuth)} className="profileScreen_signOut">Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ProfileScreen;