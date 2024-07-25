import React from 'react'

import PropTypes from 'prop-types'

import './cta26.css'

const CTA26 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="thq-section-max-width">
        <div className="cta26-accent2-bg">
          <div className="cta26-accent1-bg">
            <div className="cta26-container1">
              <div className="cta26-content">
                <span>
                  {props.heading1 ?? (
                    <fragment>
                      <span className="thq-heading-2">
                        Ready to automate your aquarium?
                      </span>
                    </fragment>
                  )}
                </span>
                <p>
                  {props.content1 ?? (
                    <fragment>
                      <span className="thq-body-large">
                        Experience the convenience of a smart home aquarium with
                        our automated system.
                      </span>
                    </fragment>
                  )}
                </p>
              </div>
              <div className="cta26-actions">
                <button
                  type="button"
                  className="thq-button-filled cta26-button"
                >
                  <span>
                    {props.action1 ?? (
                      <fragment>
                        <span>Get started now</span>
                      </fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA26.defaultProps = {
  heading1: undefined,
  content1: undefined,
  action1: undefined,
}

CTA26.propTypes = {
  heading1: PropTypes.element,
  content1: PropTypes.element,
  action1: PropTypes.element,
}

export default CTA26
