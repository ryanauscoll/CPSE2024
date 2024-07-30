import React from 'react'

import PropTypes from 'prop-types'

import './sign-in31.css'

const SignIn31 = (props) => {
  return (
    <div className="sign-in31-container thq-section-padding">
      <div className="sign-in31-max-width thq-section-padding thq-section-max-width">
        <div className="sign-in31-form-root">
          <div className="sign-in31-form">
            <h2>
              {props.heading1 ?? (
                <fragment>
                  <span className="sign-in31-text6 thq-heading-2">
                    Sign in to AquaSmart
                  </span>
                </fragment>
              )}
            </h2>
            <form className="sign-in31-form1">
              <div className="sign-in31-email">
                <label
                  htmlFor="thq-sign-in-1-password"
                  className="thq-body-large"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="thq-sign-in-3-email"
                  required="true"
                  placeholder="Email address"
                  className="sign-in31-textinput thq-input thq-body-large"
                />
              </div>
              <div className="sign-in31-password">
                <div className="sign-in31-container1">
                  <label
                    htmlFor="thq-sign-in-3-password"
                    className="thq-body-large"
                  >
                    Password
                  </label>
                  <div className="sign-in31-hide-password">
                    <svg viewBox="0 0 1024 1024" className="sign-in31-icon">
                      <path d="M317.143 762.857l44.571-80.571c-66.286-48-105.714-125.143-105.714-206.857 0-45.143 12-89.714 34.857-128.571-89.143 45.714-163.429 117.714-217.714 201.714 59.429 92 143.429 169.143 244 214.286zM539.429 329.143c0-14.857-12.571-27.429-27.429-27.429-95.429 0-173.714 78.286-173.714 173.714 0 14.857 12.571 27.429 27.429 27.429s27.429-12.571 27.429-27.429c0-65.714 53.714-118.857 118.857-118.857 14.857 0 27.429-12.571 27.429-27.429zM746.857 220c0 1.143 0 4-0.571 5.143-120.571 215.429-240 432-360.571 647.429l-28 50.857c-3.429 5.714-9.714 9.143-16 9.143-10.286 0-64.571-33.143-76.571-40-5.714-3.429-9.143-9.143-9.143-16 0-9.143 19.429-40 25.143-49.714-110.857-50.286-204-136-269.714-238.857-7.429-11.429-11.429-25.143-11.429-39.429 0-13.714 4-28 11.429-39.429 113.143-173.714 289.714-289.714 500.571-289.714 34.286 0 69.143 3.429 102.857 9.714l30.857-55.429c3.429-5.714 9.143-9.143 16-9.143 10.286 0 64 33.143 76 40 5.714 3.429 9.143 9.143 9.143 15.429zM768 475.429c0 106.286-65.714 201.143-164.571 238.857l160-286.857c2.857 16 4.571 32 4.571 48zM1024 548.571c0 14.857-4 26.857-11.429 39.429-17.714 29.143-40 57.143-62.286 82.857-112 128.571-266.286 206.857-438.286 206.857l42.286-75.429c166.286-14.286 307.429-115.429 396.571-253.714-42.286-65.714-96.571-123.429-161.143-168l36-64c70.857 47.429 142.286 118.857 186.857 192.571 7.429 12.571 11.429 24.571 11.429 39.429z"></path>
                    </svg>
                    <span className="thq-body-small">Hide</span>
                  </div>
                </div>
                <input
                  type="password"
                  id="thq-sign-in-3-password"
                  required="true"
                  placeholder="Password"
                  className="sign-in31-textinput1 thq-input thq-body-large"
                />
                <a
                  href="https://teleporthq.io/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="sign-in31-link thq-body-small"
                >
                  Forgot password
                </a>
              </div>
            </form>
            <div className="sign-in31-container2">
              <button
                type="submit"
                className="sign-in31-button thq-button-filled"
              >
                <span>
                  {props.action1 ?? (
                    <fragment>
                      <span className="sign-in31-text5 thq-body-small">
                        Sign In
                      </span>
                    </fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="sign-in31-container3">
          <div className="sign-in31-divider"></div>
        </div>
      </div>
      <img
        alt={props.image1Alt}
        src="https://images.unsplash.com/photo-1461418559055-6f020c5a91e7?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjE3ODI2MXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1500"
        className="sign-in31-sign-up-image thq-img-ratio-16-9"
      />
      <div className="sign-in31-container4"></div>
    </div>
  )
}

SignIn31.defaultProps = {
  action1: undefined,
  heading1: undefined,
  image1Alt: 'Aquarium Sign In Image',
}

SignIn31.propTypes = {
  action1: PropTypes.element,
  heading1: PropTypes.element,
  image1Alt: PropTypes.string,
}

export default SignIn31
