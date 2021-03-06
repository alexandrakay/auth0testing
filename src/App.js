import React from 'react';
import './App.css';
import LoginBtn from './components/LoginBtn';
import LogoutBtn from './components/LogoutBtn';
import Profile from './components/Profile'
import { useAuth0 } from  '@auth0/auth0-react'

const App = () => {
  const { isLoading } = useAuth0
  if (isLoading) return <div>Loading... </div>
  return (
   <>
   <LoginBtn />
   <LogoutBtn />
   <Profile />
   </>
  );
}

export default App;
