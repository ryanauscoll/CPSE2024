import React from 'react'

import PropTypes from 'prop-types'

import './steps2.css'

const Steps2 = (props) => {
  return (
    <div
      id={props.steps2Id}
      className={`steps2-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="steps2-max-width thq-section-max-width">
        <div className="steps2-container1 thq-grid-2">
          <div className="steps2-section-header">
            <h2 className="thq-heading-2 steps2-text">Simple Setup</h2>
            <p className="thq-body-large">
              Setting up AquaSmart is a breeze. Simply follow the easy
              step-by-step instructions to get your smart home aquarium system
              up and running in no time. Connect to the app, customize settings,
              and start enjoying automated aquarium care for your aquatic pets.
            </p>
          </div>
          <div className="steps2-container2">
            <div className="steps2-container3 thq-card">
              <h2>
                {props.step1Title ?? (
                  <fragment>
                    <span className="steps2-text14 thq-heading-2">
                        Set up the aquarium
                    </span>
                  </fragment>
                )}
              </h2>
              <span>
                {props.step1Description ?? (
                  <fragment>
                    <span className="steps2-text19 thq-body-small">
                      Prepare the aquarium by cleaning it thoroughly and adding
                      the necessary substrate and decorations.
                    </span>
                  </fragment>
                )}
              </span>
              <label className="steps2-text04 thq-heading-3">01</label>
            </div>
            <div className="steps2-container4 thq-card">
              <h2>
                {props.step2Title ?? (
                  <fragment>
                    <span className="steps2-text21 thq-heading-2">
                      Install the smart devices
                    </span>
                  </fragment>
                )}
              </h2>
              <span>
                {props.step2Description ?? (
                  <fragment>
                    <span className="steps2-text20 thq-body-small">
                      Install the automated feeder, heater, and lighting system
                      in the aquarium according to the manufacturer&apos;s
                      instructions.
                    </span>
                  </fragment>
                )}
              </span>
              <label className="steps2-text07 thq-heading-3">02</label>
            </div>
            <div className="steps2-container5 thq-card">
              <h2>
                {props.step3Title ?? (
                  <fragment>
                    <span className="steps2-text15 thq-heading-2">
                          Connect to the app
                    </span>
                  </fragment>
                )}
              </h2>
              <span>
                {props.step3Description ?? (
                  <fragment>
                    <span className="steps2-text17 thq-body-small">
                      Download the dedicated app for the smart home aquarium
                      project and follow the on-screen instructions to connect
                      your devices.
                    </span>
                  </fragment>
                )}
              </span>
              <label className="steps2-text10 thq-heading-3">03</label>
            </div>
            <div className="steps2-container6 thq-card">
              <h2>
                {props.step4Title ?? (
                  <fragment>
                    <span className="steps2-text18 thq-heading-2">
                         Customize settings
                    </span>
                  </fragment>
                )}
              </h2>
              <span>
                {props.step4Description ?? (
                  <fragment>
                    <span className="steps2-text16 thq-body-small">
                      Adjust feeding schedules, temperature settings, and
                      lighting preferences through the app to create the perfect
                      environment for your aquatic pets.
                    </span>
                  </fragment>
                )}
              </span>
              <label className="steps2-text13 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps2.defaultProps = {
  step1Title: undefined,
  step3Title: undefined,
  steps2Id: '',
  step4Description: undefined,
  step3Description: undefined,
  step4Title: undefined,
  rootClassName: '',
  step1Description: undefined,
  step2Description: undefined,
  step2Title: undefined,
}

Steps2.propTypes = {
  step1Title: PropTypes.element,
  step3Title: PropTypes.element,
  steps2Id: PropTypes.string,
  step4Description: PropTypes.element,
  step3Description: PropTypes.element,
  step4Title: PropTypes.element,
  rootClassName: PropTypes.string,
  step1Description: PropTypes.element,
  step2Description: PropTypes.element,
  step2Title: PropTypes.element,
}

export default Steps2
