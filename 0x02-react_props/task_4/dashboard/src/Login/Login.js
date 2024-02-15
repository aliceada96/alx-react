import React from 'react';
import './Login.css';

export default function Login() {
  return (
    <>
      <div>
          <p>Login to access the full dashboard </p>

            <p>
              <label htmlFor="email">Email: </label>
              <input type="email" name="email" id="email" />

              <label htmlFor="password"> Password: </label>
              <input type="password" name="password" id="password" />

              <button type="submit">OK</button>
            </p>
        </div>
      </>
  )
}