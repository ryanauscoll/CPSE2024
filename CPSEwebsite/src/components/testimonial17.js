import React from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container">
          <h2>
            {props.heading1 ?? (
              <fragment>
                <span className="thq-heading-2">Testimonials</span>
              </fragment>
            )}
          </h2>
          <span>
            {props.content1 ?? (
              <fragment>
                <span className="testimonial17-text22 thq-body-small">
                  I have been using this smart home aquarium system for a few
                  months now, and I am amazed by how easy it is to maintain my
                  aquarium. The automation features have made my life so much
                  simpler!
                </span>
              </fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial17-card">
                <div className="testimonial17-container02">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image"
                  />
                  <div className="testimonial17-container03">
                    <strong>
                      {props.author1Name ?? (
                        <fragment>
                          <span className="thq-body-large">John Doe</span>
                        </fragment>
                      )}
                    </strong>
                    <span>
                      {props.author1Position ?? (
                        <fragment>
                          <span className="thq-body-small">
                            Aquarium Enthusiast
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review1 ?? (
                    <fragment>
                      <span className="testimonial17-text24 thq-body-small">
                        I highly recommend this smart home aquarium project to
                        anyone who wants to enjoy their aquarium without the
                        hassle of manual maintenance.
                      </span>
                    </fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container04">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container05">
                    <strong>
                      {props.author2Name ?? (
                        <fragment>
                          <span className="thq-body-large">Jane Smith</span>
                        </fragment>
                      )}
                    </strong>
                    <span>
                      {props.author2Position ?? (
                        <fragment>
                          <span className="thq-body-small">
                            Marine Biologist
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review2 ?? (
                    <fragment>
                      <span className="testimonial17-text18 thq-body-small">
                        As a marine biologist, I appreciate the precision and
                        accuracy of this automated system. It ensures the
                        optimal conditions for marine life, making it a valuable
                        tool for both hobbyists and professionals.
                      </span>
                    </fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container06">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container07">
                    <strong>
                      {props.author3Name ?? (
                        <fragment>
                          <span className="thq-body-large">David Lee</span>
                        </fragment>
                      )}
                    </strong>
                    <span>
                      {props.author3Position ?? (
                        <fragment>
                          <span className="thq-body-small">
                            Tech Enthusiast
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review3 ?? (
                    <fragment>
                      <span className="testimonial17-text26 thq-body-small">
                        I love how I can control and monitor my aquarium from
                        anywhere using my smartphone. The smart features of this
                        system have truly elevated my aquarium experience.
                      </span>
                    </fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container08">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container09">
                    <strong>
                      {props.author4Name ?? (
                        <fragment>
                          <span className="thq-body-large">Sarah Johnson</span>
                        </fragment>
                      )}
                    </strong>
                    <span>
                      {props.author4Position ?? (
                        <fragment>
                          <span className="thq-body-small">
                            Environmental Scientist
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review4 ?? (
                    <fragment>
                      <span className="testimonial17-text27 thq-body-small">
                        This smart home aquarium project aligns perfectly with
                        sustainable practices in aquaculture. It promotes
                        responsible fishkeeping while providing a seamless user
                        experience.
                      </span>
                    </fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  author2Position: undefined,
  author1Position: undefined,
  author3Alt: 'image',
  author1Name: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGF2YXRhcnxlbnwwfHx8fDE3MTYzODM1NTJ8MA&ixlib=rb-4.0.3&w=200',
  author3Name: undefined,
  review2: undefined,
  author2Name: undefined,
  author4Position: undefined,
  author4Name: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMxfHxhdmF0YXJ8ZW58MHx8fHwxNzE2MzgzNTY2fDA&ixlib=rb-4.0.3&w=200',
  author1Alt: 'image',
  author2Src:
    'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhdmF0YXJ8ZW58MHx8fHwxNzE2MzgzNTUyfDA&ixlib=rb-4.0.3&w=200',
  author3Src:
    'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxhdmF0YXJ8ZW58MHx8fHwxNzE2MzgzNTUyfDA&ixlib=rb-4.0.3&w=200',
  author2Alt: 'image',
  author4Alt: 'image',
  content1: undefined,
  author3Position: undefined,
  review1: undefined,
  heading1: undefined,
  review3: undefined,
  review4: undefined,
}

Testimonial17.propTypes = {
  author2Position: PropTypes.element,
  author1Position: PropTypes.element,
  author3Alt: PropTypes.string,
  author1Name: PropTypes.element,
  author1Src: PropTypes.string,
  author3Name: PropTypes.element,
  review2: PropTypes.element,
  author2Name: PropTypes.element,
  author4Position: PropTypes.element,
  author4Name: PropTypes.element,
  author4Src: PropTypes.string,
  author1Alt: PropTypes.string,
  author2Src: PropTypes.string,
  author3Src: PropTypes.string,
  author2Alt: PropTypes.string,
  author4Alt: PropTypes.string,
  content1: PropTypes.element,
  author3Position: PropTypes.element,
  review1: PropTypes.element,
  heading1: PropTypes.element,
  review3: PropTypes.element,
  review4: PropTypes.element,
}

export default Testimonial17
