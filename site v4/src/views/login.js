import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import SignIn3 from '../components/sign-in3'
import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>Login - Wee Knowledgeable Gnu</title>
        <meta property="og:title" content="Login - Wee Knowledgeable Gnu" />
      </Helmet>
      <Navbar8
        link1={
          <fragment>
            <span className="login-text thq-link thq-body-small">Home</span>
          </fragment>
        }
        link2={
          <fragment>
            <span className="login-text01 thq-link thq-body-small">
              Features
            </span>
          </fragment>
        }
        link3={
          <fragment>
            <span className="login-text02 thq-link thq-body-small">About</span>
          </fragment>
        }
        link4={
          <fragment>
            <span className="login-text03 thq-link thq-body-small">
              Contact
            </span>
          </fragment>
        }
        page1={
          <fragment>
            <span className="login-text04 thq-body-large">Page One</span>
          </fragment>
        }
        page2={
          <fragment>
            <span className="login-text05 thq-body-large">Page Two</span>
          </fragment>
        }
        page3={
          <fragment>
            <span className="login-text06 thq-body-large">Page Three</span>
          </fragment>
        }
        page4={
          <fragment>
            <span className="login-text07 thq-body-large">Page Four</span>
          </fragment>
        }
        link21={
          <fragment>
            <span className="login-text08 thq-link thq-body-small">
              Contact
            </span>
          </fragment>
        }
        action1={
          <fragment>
            <span className="login-text09">Main Action</span>
          </fragment>
        }
        action2={
          <fragment>
            <span className="login-text10">Secondary Action</span>
          </fragment>
        }
        logoAlt="Logo"
        logoSrc="https://res.cloudinary.com/dhrmvdbht/image/upload/v1722198029/AquaSmart_Logo_Blue_x3gxts.png"
        link1Url="/"
        link2Url="#Features251"
        rootClassName="navbar8-root-class-name1"
        page1Description={
          <fragment>
            <span className="login-text11 thq-body-small">
              Page One Description
            </span>
          </fragment>
        }
        page2Description={
          <fragment>
            <span className="login-text12 thq-body-small">
              Page Two Description
            </span>
          </fragment>
        }
        page3Description={
          <fragment>
            <span className="login-text13 thq-body-small">
              Page Three Description
            </span>
          </fragment>
        }
        page4Description={
          <fragment>
            <span className="login-text14 thq-body-small">
              Page Four Description
            </span>
          </fragment>
        }
      ></Navbar8>
      <SignIn3></SignIn3>
    </div>
  )
}

export default Login
