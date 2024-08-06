import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navbar4.css'

const Navbar4 = (props) => {
  return (
    <header className="navbar4-container">
      <header data-thq="thq-navbar" className="navbar4-navbar-interactive">
        <img
          alt="Logo"
          src="https://res.cloudinary.com/dhrmvdbht/image/upload/v1722198029/AquaSmart_Logo_Blue_x3gxts.png"
          className="navbar4-image1"
        />
        <div data-thq="thq-navbar-nav" className="navbar4-desktop-menu">
          <nav className="navbar4-links">
            <a href={props.link1Url1} className="navbar4-link1">
              {props.link1 ?? (
                <fragment>
                  <span className="navbar4-text1 thq-link thq-body-small">
                    Home
                  </span>
                </fragment>
              )}
            </a>
            <a href={props.link2Url1} className="navbar4-link2">
              {props.link2 ?? (
                <fragment>
                  <span className="navbar4-text4 thq-link thq-body-small">
                    Features
                  </span>
                </fragment>
              )}
            </a>
            <a
              href="mailto:admin@aquasmart.app?subject="
              className="navbar4-link3"
            >
              {props.link3 ?? (
                <fragment>
                  <span className="navbar4-text6 thq-link thq-body-small">
                    Contact
                  </span>
                </fragment>
              )}
            </a>
          </nav>
          <div className="navbar4-buttons">
            <Link to="/login" className="navbar4-action2 thq-button-outline">
              <span className="thq-body-small">
                {props.action2 ?? (
                  <fragment>
                    <span className="navbar4-text2">Login</span>
                  </fragment>
                )}
              </span>
            </Link>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="navbar4-burger-menu"></div>
        <div data-thq="thq-mobile-menu" className="navbar4-mobile-menu">
          <div className="navbar4-nav">
            <div className="navbar4-top">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="navbar4-logo"
              />
              <div data-thq="thq-close-menu" className="navbar4-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar4-icon">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="navbar4-links1">
              <a href={props.link1Url}>
                {props.link1 ?? (
                  <fragment>
                    <span className="navbar4-text1 thq-link thq-body-small">
                      Home
                    </span>
                  </fragment>
                )}
              </a>
              <a href={props.link2Url}>
                {props.link2 ?? (
                  <fragment>
                    <span className="navbar4-text4 thq-link thq-body-small">
                      Features
                    </span>
                  </fragment>
                )}
              </a>
              <a href={props.link3Url}>
                {props.link3 ?? (
                  <fragment>
                    <span className="navbar4-text6 thq-link thq-body-small">
                      Contact
                    </span>
                  </fragment>
                )}
              </a>
              <a href={props.link4Url}>
                {props.link4 ?? (
                  <fragment>
                    <span className="navbar4-text5 thq-link thq-body-small">
                      Default value
                    </span>
                  </fragment>
                )}
              </a>
              <a href={props.link5Url}>
                {props.link5 ?? (
                  <fragment>
                    <span className="navbar4-text3 thq-link thq-body-small">
                      Link5
                    </span>
                  </fragment>
                )}
              </a>
            </nav>
          </div>
          <div className="navbar4-buttons1">
            <button>Login</button>
            <button>Register</button>
          </div>
        </div>
      </header>
    </header>
  )
}

Navbar4.defaultProps = {
  link1: undefined,
  action2: undefined,
  link5: undefined,
  link1Url: 'https://www.teleporthq.io',
  link1Url1: 'https://www.teleporthq.io',
  link2: undefined,
  link2Url1: 'https://www.teleporthq.io',
  link4: undefined,
  link3: undefined,
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  link2Url: 'https://www.teleporthq.io',
  logoAlt: 'logo',
  link3Url: 'https://www.teleporthq.io',
  link5Url: 'https://www.teleporthq.io',
  link4Url: 'https://www.teleporthq.io',
}

Navbar4.propTypes = {
  link1: PropTypes.element,
  action2: PropTypes.element,
  link5: PropTypes.element,
  link1Url: PropTypes.string,
  link1Url1: PropTypes.string,
  link2: PropTypes.element,
  link2Url1: PropTypes.string,
  link4: PropTypes.element,
  link3: PropTypes.element,
  logoSrc: PropTypes.string,
  link2Url: PropTypes.string,
  logoAlt: PropTypes.string,
  link3Url: PropTypes.string,
  link5Url: PropTypes.string,
  link4Url: PropTypes.string,
}

export default Navbar4
