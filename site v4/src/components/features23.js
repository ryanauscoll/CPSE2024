import React from 'react'

import PropTypes from 'prop-types'

import './features23.css'

const Features23 = (props) => {
  return (
    <div className="features23-layout349 thq-section-padding">
      <div id="sensors" className="features23-max-width thq-section-max-width">
        <div className="features23-container">
          <h2>
            {props.heading1 ?? (
              <fragment>
                <span className="features23-text23 thq-heading-2">
                  Features
                </span>
              </fragment>
            )}
          </h2>
          <span>
            {props.content1 ?? (
              <fragment>
                <span className="features23-text22 thq-body-small">
                  AquaSmart uses advanced technological components to provide an
                  advanced user experience
                </span>
              </fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-3">
          <div className="features23-container2 thq-card">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="features23-image thq-img-round"
            />
            <h2>
              {props.feature1Title ?? (
                <fragment>
                  <span className="features23-text18 thq-heading-2">
                    Default value
                  </span>
                </fragment>
              )}
            </h2>
            <span>
              {props.feature1Description ?? (
                <fragment>
                  <span className="features23-text26 thq-body-small">
                    Default value
                  </span>
                </fragment>
              )}
            </span>
          </div>
          <div className="features23-container3 thq-card">
            <img
              alt={props.feature2ImageAlt}
              src={props.feature2ImageSrc}
              className="features23-image1 thq-img-round"
            />
            <h2>
              {props.feature2Title ?? (
                <fragment>
                  <span className="features23-text16 thq-heading-2">
                    Default value
                  </span>
                </fragment>
              )}
            </h2>
            <span>
              {props.feature2Description ?? (
                <fragment>
                  <span className="features23-text20 thq-body-small">
                    Default value
                  </span>
                </fragment>
              )}
            </span>
          </div>
          <div className="features23-container4 thq-card">
            <img
              alt={props.feature3ImageAlt}
              src={props.feature3ImageSrc}
              className="features23-image2 thq-img-round"
            />
            <h2>
              {props.feature3Title ?? (
                <fragment>
                  <span className="features23-text21 thq-heading-2">
                    Default value
                  </span>
                </fragment>
              )}
            </h2>
            <span>
              {props.feature3Description ?? (
                <fragment>
                  <span className="features23-text25 thq-body-small">
                    Default value
                  </span>
                </fragment>
              )}
            </span>
          </div>
          <div className="features23-container5 thq-card">
            <img
              alt={props.feature4ImageAlt}
              src={props.feature4ImageSrc}
              className="features23-image3 thq-img-round"
            />
            <h2>
              {props.feature4Title ?? (
                <fragment>
                  <span className="features23-text17 thq-heading-2">
                    Default value
                  </span>
                </fragment>
              )}
            </h2>
            <span>
              {props.feature4Description ?? (
                <fragment>
                  <span className="features23-text19 thq-body-small">
                    Default value
                  </span>
                </fragment>
              )}
            </span>
          </div>
          <div className="features23-container6 thq-card">
            <img
              alt={props.feature5ImageAlt}
              src={props.feature5ImageSrc}
              className="features23-image4 thq-img-round"
            />
            <h2>
              {props.feature5Title ?? (
                <fragment>
                  <span className="features23-text14 thq-heading-2">
                    Default value
                  </span>
                </fragment>
              )}
            </h2>
            <span>
              {props.feature5Description ?? (
                <fragment>
                  <span className="features23-text27 thq-body-small">
                    Default value
                  </span>
                </fragment>
              )}
            </span>
          </div>
          <div className="features23-container7 thq-card">
            <img
              alt={props.feature6ImageAlt}
              src={props.feature6ImageSrc}
              className="features23-image5 thq-img-round"
            />
            <h2>
              {props.feature6Title ?? (
                <fragment>
                  <span className="features23-text15 thq-heading-2">
                    Feature 6
                  </span>
                </fragment>
              )}
            </h2>
            <span>
              {props.feature6Description ?? (
                <fragment>
                  <span className="features23-text24 thq-body-small">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla.
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

Features23.defaultProps = {
  feature5Title: undefined,
  feature6Title: undefined,
  feature2Title: undefined,
  feature4Title: undefined,
  feature1Title: undefined,
  feature4Description: undefined,
  feature2Description: undefined,
  feature6ImageSrc:
    'https://images.unsplash.com/photo-1514503962390-34dba96ba3f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjE4MjcwM3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImageAlt: 'Lighting Control',
  feature3Title: undefined,
  feature6ImageAlt: 'Feature 1',
  feature5ImageAlt: 'image',
  feature2ImageAlt: 'Water Quality Monitoring',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1703664469583-b34430f5e9f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTkyMjgzMXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1553901771-6f23562a2993?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTkyMjgzMXw&ixlib=rb-4.0.3&q=80&w=1080',
  content1: undefined,
  feature4ImageAlt: 'Remote Access and Alerts',
  heading1: undefined,
  feature5ImageSrc:
    'https://images.unsplash.com/photo-1529376628022-9aaf5a81e0f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTkyMjkwMnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature6Description: undefined,
  feature1ImageAlt: 'Automated Feeding Schedule',
  feature3Description: undefined,
  feature1Description: undefined,
  feature5Description: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTkyMjgzMXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1707580595926-f5ff2cd9e9f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTkyMjgzMXw&ixlib=rb-4.0.3&q=80&w=1080',
}

Features23.propTypes = {
  feature5Title: PropTypes.element,
  feature6Title: PropTypes.element,
  feature2Title: PropTypes.element,
  feature4Title: PropTypes.element,
  feature1Title: PropTypes.element,
  feature4Description: PropTypes.element,
  feature2Description: PropTypes.element,
  feature6ImageSrc: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature3Title: PropTypes.element,
  feature6ImageAlt: PropTypes.string,
  feature5ImageAlt: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature4ImageSrc: PropTypes.string,
  content1: PropTypes.element,
  feature4ImageAlt: PropTypes.string,
  heading1: PropTypes.element,
  feature5ImageSrc: PropTypes.string,
  feature6Description: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature3Description: PropTypes.element,
  feature1Description: PropTypes.element,
  feature5Description: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
}

export default Features23
