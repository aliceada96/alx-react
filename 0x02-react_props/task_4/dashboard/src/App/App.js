import React from 'react';
import './App.css';
import Notification from '../Notifications/Notifications'
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';



function App(isLoggedIn) {
  return (
    <>
    <Notification />
    <div className='App'>
      <Header />
      {isLoggedIn ? <CourseList /> : <Login />}
      <Footer />
    </div>
    </>
  );
}

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
