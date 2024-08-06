// SignIn31.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import './sign-in31.css';
import { auth } from './firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const SignIn31 = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [register, setRegister] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (register) {
        await createUserWithEmailAndPassword(auth, email, password);
        alert('User registered successfully!');
        history.push('/dashboard');
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        alert('User logged in successfully!');
        history.push('/dashboard');
      }
    } catch (error) {
      console.error('There was an error!', error);
      alert(error.message); // Display the error to the user
    }
  };

  return (
    <div className="sign-in31-container thq-section-padding">
      <video
        className="sign-in31-background-video"
        autoPlay
        loop
        muted
      >
        <source src="https://cdn.pixabay.com/video/2022/03/15/110877-689510466_large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="sign-in31-overlay"></div>
      <div className="sign-in31-max-width thq-section-padding thq-section-max-width">
        <div className="sign-in31-form-root">
          <div className="sign-in31-form">
            <h2>
              {props.heading1 ?? (
                <fragment>
                  <span className="sign-in31-text08 thq-heading-2">
                    Welcome back! Sign in to AquaSmart
                  </span>
                </fragment>
              )}
            </h2>
            <form className="sign-in31-form1" onSubmit={handleSubmit}>
              <div className="sign-in31-email">
                <label htmlFor="thq-sign-in-3-email" className="thq-body-large">
                  Email
                </label>
                <input
                  type="email"
                  id="thq-sign-in-3-email"
                  required
                  placeholder="Email address"
                  className="sign-in31-textinput thq-input thq-body-large"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="sign-in31-password">
                <div className="sign-in31-container1">
                  <label htmlFor="thq-sign-in-3-password" className="thq-body-large">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  id="thq-sign-in-3-password"
                  required
                  placeholder="Password"
                  className="sign-in31-textinput1 thq-input thq-body-large"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="sign-in31-container2">
                <button type="submit" className="sign-in31-button thq-button-filled">
                  <span>
                    {register ? (
                      <span className="sign-in31-text07 thq-body-small">Sign Up</span>
                    ) : (
                      <span className="sign-in31-text07 thq-body-small">Sign In</span>
                    )}
                  </span>
                </button>
              </div>
            </form>
            <button
              type="button"
              className="sign-in31-button1 thq-button-outline"
              onClick={() => setRegister(!register)}
            >
              <span>
                {register ? (
                  <span className="sign-in31-text10 thq-body-small">Already have an account? Sign In</span>
                ) : (
                  <span className="sign-in31-text10 thq-body-small">Create Account</span>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

SignIn31.defaultProps = {
  action1: undefined,
  heading1: undefined,
  image1Alt: 'Aquarium Sign In Image',
  content1: undefined,
  action2: undefined,
};

SignIn31.propTypes = {
  action1: PropTypes.element,
  heading1: PropTypes.element,
  image1Alt: PropTypes.string,
  content1: PropTypes.element,
  action2: PropTypes.element,
};

export default SignIn31;
