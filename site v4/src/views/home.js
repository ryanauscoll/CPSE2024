// Home.js
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar4 from '../components/navbar4';
import Hero8 from '../components/hero8';
import Banner2 from '../components/banner2';
import Features7 from '../components/features7';
import Features11 from '../components/features11';
import Steps2 from '../components/steps2';
import Features23 from '../components/features23';
import './home.css';

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>AquaSmart</title>
        <meta property="og:title" content="AquaSmart" />
      </Helmet>
      <Navbar4
        link1={
          <fragment>
            <span className="home-text thq-link thq-body-small">Home</span>
          </fragment>
        }
        link2={
          <fragment>
            <span className="home-text01 thq-link thq-body-small">Features</span>
          </fragment>
        }
        link3={
          <fragment>
            <span className="home-text02 thq-link thq-body-small">Contact</span>
          </fragment>
        }
        link4={
          <fragment>
            <span className="home-text03 thq-link thq-body-small">
              Default value
            </span>
          </fragment>
        }
        link5={
          <fragment>
            <span className="home-text04 thq-link thq-body-small">Link5</span>
          </fragment>
        }
        action2={
          <fragment>
            <span className="home-text05">Login</span>
          </fragment>
        }
        link1Url1="#Hero8"
        link2Url1="#Banner2"
      ></Navbar4>
      <Hero8
        text={
          <fragment>
            <span className="home-text06">Learn More</span>
          </fragment>
        }
        action1={
          <fragment>
            <span className="home-text07 thq-body-small">Dashboard</span>
          </fragment>
        }
        hero8Id="Hero8"
        textUrl="#Hero5"
        content1={
          <fragment>
            <span className="home-text08 thq-body-large">
              <span className="home-text09">
                Self-Sustaining Aquarium Solutions
              </span>
              <br></br>
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="home-text11 thq-heading-1">
              <span className="home-text12">Aqua</span>
              <span className="home-text13">Smart</span>
            </span>
          </fragment>
        }
        buttonUrl="#Banner2"
        image1Src="https://images.unsplash.com/photo-1535591273668-578e31182c4f?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTkyMDIxMnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
        buttonUrl1="/login"
        rootClassName="hero8-root-class-name"
      ></Hero8>
      <img
        alt="image"
        src="/tank.png"
        className="home-image"
      />
      <div className="home-container1"></div>
      <Banner2
        content1={
          <fragment>
            <span className="home-text14 thq-heading-3">
              a smart aquarium that enables fish owners to automate the
              maintenance process by utilizing remote monitoring and control.
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="home-text15 thq-heading-2">Introducing AquaSmart</span>
          </fragment>
        }
        rootClassName="banner2-root-class-name"
        banner2Id="Banner2"
      ></Banner2>
      <Features7
        features7Id="Features7"
        feature1Title={
          <fragment>
            <span className="home-text16 thq-heading-3">
              Environment Information
            </span>
          </fragment>
        }
        feature2Title={
          <fragment>
            <span className="home-text17 thq-heading-3">Self Sustainment</span>
          </fragment>
        }
        feature3Title={
          <fragment>
            <span className="home-text18 thq-heading-3">Camera View</span>
          </fragment>
        }
        feature1Description={
          <fragment>
            <span className="home-text19 thq-body-small">
              Real-time environmental data such as temperature, pH levels, and
              lighting intensity collected by sensors.
            </span>
          </fragment>
        }
        feature2Description={
          <fragment>
            <span className="home-text20 thq-body-small">
              Smart water regulation and motorized cleaning that reacts to
              sensor data.
            </span>
          </fragment>
        }
        feature3Description={
          <fragment>
            <span className="home-text21 thq-body-small">
              Multi-view camera streaming with video saving.
            </span>
          </fragment>
        }
      ></Features7>
      <a href="#Features11" className="home-button thq-button-outline">
        <span>Check out more</span>
      </a>
      <Features11
        buttonUrl="/login"
        buttonUrl1="#Steps2"
        mainAction={
          <fragment>
            <span className="home-text23 thq-body-small">
              <span>Visit Dashboard</span>
              <br className="home-text25"></br>
            </span>
          </fragment>
        }
        mainAction1={
          <fragment>
            <span className="home-text26 thq-body-small">
              Check out the simple setup
            </span>
          </fragment>
        }
        features11Id="Features11"
        feature1Title={
          <fragment>
            <span className="home-text27 thq-heading-2">
              Beautiful Dashboard For Companion App
            </span>
          </fragment>
        }
        rootClassName="features11-root-class-name"
        featureImageSrc="https://miro.medium.com/v2/resize:fit:940/1*JqdAGNJI6DW8iuhO5EpbRQ.png"
        feature1Description={
          <fragment>
            <span className="home-text28 thq-body-large">
              Already logged in?
            </span>
          </fragment>
        }
      ></Features11>
      <Steps2
        steps2Id="Steps2"
        step1Title={
          <fragment>
            <span className="home-text29 thq-heading-2">
                Set up the aquarium
            </span>
          </fragment>
        }
        step2Title={
          <fragment>
            <span className="home-text30 thq-heading-2">
              Install the smart devices
            </span>
          </fragment>
        }
        step3Title={
          <fragment>
            <span className="home-text31 thq-heading-2">
                  Connect to the app
            </span>
          </fragment>
        }
        step4Title={
          <fragment>
            <span className="home-text32 thq-heading-2">
                 Customize settings
            </span>
          </fragment>
        }
        rootClassName="steps2-root-class-name"
        step1Description={
          <fragment>
            <span className="home-text33 thq-body-small">
              Prepare the aquarium by cleaning it thoroughly and adding the
              necessary substrate and decorations.
            </span>
          </fragment>
        }
        step2Description={
          <fragment>
            <span className="home-text34 thq-body-small">
              Install the automated feeder, heater, and lighting system in the
              aquarium according to the manufacturer&apos;s instructions.
            </span>
          </fragment>
        }
        step3Description={
          <fragment>
            <span className="home-text35 thq-body-small">
              Download the dedicated app for the smart home aquarium project and
              follow the on-screen instructions to connect your devices.
            </span>
          </fragment>
        }
        step4Description={
          <fragment>
            <span className="home-text36 thq-body-small">
              Adjust feeding schedules, temperature settings, and lighting
              preferences through the app to create the perfect environment for
              your aquatic pets.
            </span>
          </fragment>
        }
      ></Steps2>
      <Features23
        content1={
          <fragment>
            <span className="home-text37 thq-body-small">
              AquaSmart uses advanced technological components to provide an
              advanced user experience
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="home-text38 thq-heading-2">Hardware</span>
          </fragment>
        }
        feature1Title={
          <fragment>
            <span className="home-text39 thq-heading-2">
              Temperature Sensor
            </span>
          </fragment>
        }
        feature2Title={
          <fragment>
            <span className="home-text40 thq-heading-2">
              TDS and Turbidity Sensors
            </span>
          </fragment>
        }
        feature3Title={
          <fragment>
            <span className="home-text41 thq-heading-2">EC Sensor</span>
          </fragment>
        }
        feature4Title={
          <fragment>
            <span className="home-text42 thq-heading-2">Cameras</span>
          </fragment>
        }
        feature5Title={
          <fragment>
            <span className="home-text43 thq-heading-2"> Motorized Feeder</span>
          </fragment>
        }
        feature6Title={
          <fragment>
            <span className="home-text44 thq-heading-2">Motorized Wiper</span>
          </fragment>
        }
        feature1Description={
          <fragment>
            <span className="home-text45 thq-body-small">
              High-precision temperature monitoring and data
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </fragment>
        }
        feature2Description={
          <fragment>
            <span className="home-text46 thq-body-small">
              Accurate and advanced water quality monitoring and data.
            </span>
          </fragment>
        }
        feature3Description={
          <fragment>
            <span className="home-text47 thq-body-small">
              Electrical conducitivty sensor to monitor salinity
            </span>
          </fragment>
        }
        feature4Description={
          <fragment>
            <span className="home-text48 thq-body-small">
              Live camera providing constant streaming on the dashboard
            </span>
          </fragment>
        }
        feature5Description={
          <fragment>
            <span className="home-text49 thq-body-small">
              Fish feeding that can be automatic or manually by a click of a
              button
            </span>
          </fragment>
        }
        feature6Description={
          <fragment>
            <span className="home-text50 thq-body-small">
              <span>Window cleaning that can be automatic or manual.</span>
              <br></br>
            </span>
          </fragment>
        }
      ></Features23>
    </div>
  );
};

export default Home;
