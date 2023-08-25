import React, { useEffect } from 'react';
import HomeScreen from './HomeScreen';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import { firebaseAuth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import {useDispatch, useSelector} from "react-redux";
import { logout,login, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';

function App() {

  const user=useSelector(selectUser);
  const dispatch=useDispatch();

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(firebaseAuth,(userAuth)=>{
      if(userAuth)
      {
        console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      }
      else{
        dispatch(logout());
      }
    })
    return unsubscribe;
  },[dispatch])

  return (
    <>
    {!user?(<LoginScreen />):(
    <div className="app">
     <Router>
      <Routes>
        <Route path='/profile' element={<ProfileScreen />} />
        <Route exact path="/" element={<HomeScreen />} />
      </Routes>
    </Router>
    </div>
    )}
    </>
    );
}

export default App;
