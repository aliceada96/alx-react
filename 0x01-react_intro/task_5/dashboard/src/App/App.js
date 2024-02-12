import React from 'react';
import './App.css';
import { getFooterCopy, getFullYear } from '../utils/utils';


function App() {
  return (
    <div className="app">
      <div className="App-header">
        <img src='./holberton-logo.jpg' alt="" />
        <h1>School dashboard</h1>
      </div>

      <div className="App-body">
        <p>Login to access the full dashboard </p>

          <p>
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" />

            <label htmlFor="password"> Password: </label>
            <input type="password" name="password" id="password" />
    
            <button type="submit">OK</button>
          </p>
      </div>

      <div className="App-footer">
        <p>Copyright
          {' '}
          {getFullYear()}
          {' '}
          -
          {' '}
          {getFooterCopy(true)}
        </p>
      </div>
    </div>
  );
}

export default App;
