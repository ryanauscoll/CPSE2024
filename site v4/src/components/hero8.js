import React from 'react'

import PropTypes from 'prop-types'

import './hero8.css'

const Hero8 = (props) => {
  return (
    <div
      id={props.hero8Id}
      className={`hero8-header26 thq-section-padding ${props.rootClassName} `}
    >
      <div className="hero8-max-width thq-flex-column thq-section-max-width">
        <div className="hero8-column">
          <div className="hero8-content">
            <h1>
              {props.heading1 ?? (
                <fragment>
                  <span className="hero8-text5 thq-heading-1">
                    Welcome to the Future of Aquarium Keeping
                  </span>
                </fragment>
              )}
            </h1>
            <p>
              {props.content1 ?? (
                <fragment>
                  <span className="hero8-text6 thq-body-large">
                    Automate your aquarium with our smart system
                  </span>
                </fragment>
              )}
            </p>
            <div className="hero8-actions">
              <a
                href={props.buttonUrl1}
                className="hero8-button thq-button-filled"
              >
                <span>
                  {props.action1 ?? (
                    <fragment>
                      <span className="hero8-text7 thq-body-small">
                        Learn More
                      </span>
                    </fragment>
                  )}
                </span>
              </a>
              <a
                href={props.buttonUrl}
                className="hero8-button1 thq-button-outline"
              >
                <span>
                  {props.text ?? (
                    <fragment>
                      <span className="hero8-text4">Link</span>
                    </fragment>
                  )}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero8.defaultProps = {
  text: undefined,
  hero8Id: '',
  heading1: undefined,
  content1: undefined,
  rootClassName: '',
  buttonUrl1: 'https://www.teleporthq.io',
  action1: undefined,
  buttonUrl: 'https://www.teleporthq.io',
}

Hero8.propTypes = {
  text: PropTypes.element,
  hero8Id: PropTypes.string,
  heading1: PropTypes.element,
  content1: PropTypes.element,
  rootClassName: PropTypes.string,
  buttonUrl1: PropTypes.string,
  action1: PropTypes.element,
  buttonUrl: PropTypes.string,
}

export default Hero8
