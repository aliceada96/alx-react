import React from 'react';
import './App.css';
import Notification from '../Notifications/Notifications'
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';



function App() {
  return (
    <>
    <Notification />
    <div className='App'>
      <Header />
        <div className='App-body'>
              <Login />
        </div>
      <Footer />
    </div>
    </>
  );
}

export default App;
