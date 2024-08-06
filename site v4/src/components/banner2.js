import React from 'react'

import PropTypes from 'prop-types'

import './banner2.css'

const Banner2 = (props) => {
  return (
    <div
      id={props.banner2Id}
      className={`banner2-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="banner2-max-width thq-section-max-width">
        <div className="banner2-container1">
          <h2>
            {props.heading1 ?? (
              <fragment>
                <span className="banner2-text1 thq-heading-2">Introducing Aquasmart</span>
              </fragment>
            )}
          </h2>
          <h3>
            {props.content1 ?? (
              <fragment>
                <span className="banner2-text2 thq-heading-3">
                  a smart aquarium that enables fish owners to automate the
                  maintenance process by utilizing remote monitoring and
                  control.
                </span>
              </fragment>
            )}
          </h3>
        </div>
        <video
          src="https://res.cloudinary.com/dhrmvdbht/video/upload/v1721929877/a562zt5qhnyhsltljcrd.mp4"
          loop="true"
          muted="true"
          poster={props.video1Poster}
          autoPlay="true"
          className="banner2-video"
        ></video>
      </div>
    </div>
  )
}

Banner2.defaultProps = {
  video1Poster: 'https://play.teleporthq.io/static/svg/videoposter.svg',
  rootClassName: '',
  heading1: undefined,
  content1: undefined,
  banner2Id: '',
}

Banner2.propTypes = {
  video1Poster: PropTypes.string,
  rootClassName: PropTypes.string,
  heading1: PropTypes.element,
  content1: PropTypes.element,
  banner2Id: PropTypes.string,
}

export default Banner2
