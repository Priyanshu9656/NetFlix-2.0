import React, { useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../firebase';
import './SignInScreen.css';
const SignInScreen=()=>{
    const [formValues,setformValues]=useState({email:"",password:""});

    const handleSignIn=async(e)=>{
        e.preventDefault();
        try{
            const{email,password}=formValues;
            const res=await createUserWithEmailAndPassword(firebaseAuth,email,password);
            console.log(res.data);
        }catch(error){
            alert(error);
        }
    }

    const signIn=async(e)=>{
        e.preventDefault();
        try{
            const{email,password}=formValues;
            const res=await signInWithEmailAndPassword(firebaseAuth,email,password);
            console.log(res);
        }catch(error){
            alert(error);
        }
    }
    return(
        <div className='signinScreen'>
            <form>
                <h1>Sign In</h1>
                <input name="email" placeholder="Email" type="email" value={formValues.email}
                onChange={(e)=>setformValues({
                    ...formValues,[e.target.name]: e.target.value
                })}/>
                <input name="password" placeholder='password' type="password" value={formValues.password}
                onChange={(e)=>setformValues({
                    ...formValues,[e.target.name]: e.target.value
                })} />
                <button onClick={signIn} type="submit">Sign In</button>

                <h4>
                <span className='signinScreen_gray'>
                New to Netflix? </span>
                <span className='signinScreen_link' onClick={handleSignIn} >Sign Up now.</span></h4>
            </form>
        </div>
    )
}

export default SignInScreen;