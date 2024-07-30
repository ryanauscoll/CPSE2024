import React from 'react'

import PropTypes from 'prop-types'

import './features11.css'

const Features11 = (props) => {
  return (
    <div
      id={props.features11Id}
      className={`features11-layout349 thq-section-padding ${props.rootClassName} `}
    >
      <div className="thq-flex-column thq-section-max-width features11-max-width">
        <img
          alt={props.featureImageAlt}
          src={props.featureImageSrc}
          className="features11-image thq-img-ratio-4-3"
        />
        <div className="thq-flex-column">
          <h2>
            {props.feature1Title ?? (
              <fragment>
                <span className="features11-text2 thq-heading-2">test</span>
              </fragment>
            )}
          </h2>
          <p>
            {props.feature1Description ?? (
              <fragment>
                <span className="features11-text4 thq-body-large">
                  Default value
                </span>
              </fragment>
            )}
          </p>
          <div className="thq-flex-row features11-actions">
            <a
              href={props.buttonUrl}
              className="features11-button thq-button-filled"
            >
              <span>
                {props.mainAction ?? (
                  <fragment>
                    <span className="features11-text3 thq-body-small">
                      Default value
                    </span>
                  </fragment>
                )}
              </span>
            </a>
            <a
              href={props.buttonUrl1}
              className="features11-button1 thq-button-filled"
            >
              <span>
                {props.mainAction1 ?? (
                  <fragment>
                    <span className="features11-text5 thq-body-small">
                      Check out the simple setup
                    </span>
                  </fragment>
                )}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

Features11.defaultProps = {
  feature1Title: undefined,
  features11Id: '',
  featureImageSrc:
    'https://images.unsplash.com/photo-1524169113253-c6ba17f68498?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExMnx8YWJzdHJhY3R8ZW58MHx8fHwxNzEwOTMzOTc2fDA&ixlib=rb-4.0.3&w=1400',
  mainAction: undefined,
  buttonUrl: 'https://www.teleporthq.io',
  feature1Description: undefined,
  mainAction1: undefined,
  buttonUrl1: 'https://www.teleporthq.io',
  rootClassName: '',
  featureImageAlt: 'PlaceholderImage1314',
}

Features11.propTypes = {
  feature1Title: PropTypes.element,
  features11Id: PropTypes.string,
  featureImageSrc: PropTypes.string,
  mainAction: PropTypes.element,
  buttonUrl: PropTypes.string,
  feature1Description: PropTypes.element,
  mainAction1: PropTypes.element,
  buttonUrl1: PropTypes.string,
  rootClassName: PropTypes.string,
  featureImageAlt: PropTypes.string,
}

export default Features11
