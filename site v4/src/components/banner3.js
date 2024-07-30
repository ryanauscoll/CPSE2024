import React from 'react'

import PropTypes from 'prop-types'

import './banner3.css'

const Banner3 = (props) => {
  return (
    <div className="banner3-container thq-section-padding">
      <div className="banner3-max-width thq-section-max-width">
        <div className="banner3-container1">
          <h2>
            {props.heading1 ?? (
              <fragment>
                <span className="banner3-text2 thq-heading-2">
                  Company Name
                </span>
              </fragment>
            )}
          </h2>
          <h3>
            {props.content1 ?? (
              <fragment>
                <span className="banner3-text4 thq-heading-3">
                  Company mission statement
                </span>
              </fragment>
            )}
          </h3>
        </div>
        <button type="button" className="thq-button-filled">
          <span>
            {props.action1 ?? (
              <fragment>
                <span className="banner3-text3">Call to Action</span>
              </fragment>
            )}
          </span>
        </button>
      </div>
    </div>
  )
}

Banner3.defaultProps = {
  heading1: undefined,
  action1: undefined,
  content1: undefined,
}

Banner3.propTypes = {
  heading1: PropTypes.element,
  action1: PropTypes.element,
  content1: PropTypes.element,
}

export default Banner3
