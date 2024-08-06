import React from 'react'

import SignIn31 from './sign-in31'
import './sign-in3.css'

const SignIn3 = (props) => {
  return (
    <div className="sign-in3-container thq-section-padding">
      <SignIn31
        action1={
          <fragment>
            <span className="sign-in3-text thq-body-small">Sign In</span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="sign-in3-text1 thq-heading-2">
              Sign in to AquaSmart
            </span>
          </fragment>
        }
      ></SignIn31>
    </div>
  )
}

export default SignIn3
