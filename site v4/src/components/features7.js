import React from 'react'

import PropTypes from 'prop-types'

import './features7.css'

const Features7 = (props) => {
  return (
    <div
      id={props.features7Id}
      className="features7-layout226 thq-section-padding"
    >
      <div className="features7-max-width thq-grid-auto-300 thq-section-max-width">
        <div className="thq-flex-column">
          <div className="thq-flex-column features7-content">
            <h3>
              {props.feature1Title ?? (
                <fragment>
                  <span className="features7-text5 thq-heading-3">
                    Default value
                  </span>
                </fragment>
              )}
            </h3>
            <span>
              {props.feature1Description ?? (
                <fragment>
                  <span className="features7-text3 thq-body-small">
                    Default value
                  </span>
                </fragment>
              )}
            </span>
          </div>
        </div>
        <div className="thq-flex-column">
          <div className="thq-flex-column features7-content1">
            <strong>
              {props.feature2Title ?? (
                <fragment>
                  <span className="features7-text1 thq-heading-3">
                    Default value
                  </span>
                </fragment>
              )}
            </strong>
            <span>
              {props.feature2Description ?? (
                <fragment>
                  <span className="features7-text thq-body-small">
                    Default value
                  </span>
                </fragment>
              )}
            </span>
          </div>
        </div>
        <div className="thq-flex-column">
          <div className="thq-flex-column features7-content2">
            <strong>
              {props.feature3Title ?? (
                <fragment>
                  <span className="features7-text4 thq-heading-3">
                    Default value
                  </span>
                </fragment>
              )}
            </strong>
            <span>
              {props.feature3Description ?? (
                <fragment>
                  <span className="features7-text2 thq-body-small">
                    Default value
                  </span>
                </fragment>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Features7.defaultProps = {
  features7Id: '',
  feature2Description: undefined,
  feature2Title: undefined,
  feature3Description: undefined,
  feature1Description: undefined,
  feature3Title: undefined,
  feature1Title: undefined,
}

Features7.propTypes = {
  features7Id: PropTypes.string,
  feature2Description: PropTypes.element,
  feature2Title: PropTypes.element,
  feature3Description: PropTypes.element,
  feature1Description: PropTypes.element,
  feature3Title: PropTypes.element,
  feature1Title: PropTypes.element,
}

export default Features7
