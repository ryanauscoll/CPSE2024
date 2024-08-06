import React from 'react'

import PropTypes from 'prop-types'

import './hero5.css'

const Hero5 = (props) => {
  return (
    <section
      id={props.hero5Id}
      className={`hero5-header19 thq-section-padding ${props.rootClassName} `}
    >
      <section className="hero5-max-width thq-flex-row thq-section-max-width">
        <video
          src={props.video1Src}
          loop="true"
          muted="true"
          poster={props.video1Poster}
          autoPlay="true"
          className="hero5-video"
        ></video>
        <div className="hero5-column">
          <div className="hero5-content">
            <h1>
              {props.heading1 ?? (
                <fragment>
                  <span className="hero5-text2 thq-heading-1">Introducing AquaSmart</span>
                </fragment>
              )}
            </h1>
            <p>
              {props.content1 ?? (
                <fragment>
                  <span className="hero5-text3 thq-body-large">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat.
                  </span>
                </fragment>
              )}
            </p>
          </div>
        </div>
      </section>
    </section>
  )
}

Hero5.defaultProps = {
  rootClassName: '',
  hero5Id: '',
  heading1: undefined,
  video1Src: '',
  content1: undefined,
  video1Poster: 'https://play.teleporthq.io/static/svg/videoposter.svg',
}

Hero5.propTypes = {
  rootClassName: PropTypes.string,
  hero5Id: PropTypes.string,
  heading1: PropTypes.element,
  video1Src: PropTypes.string,
  content1: PropTypes.element,
  video1Poster: PropTypes.string,
}

export default Hero5
