import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Wee Knowledgeable Gnu</title>
        <meta property="og:title" content="Wee Knowledgeable Gnu" />
      </Helmet>
      <Navbar8
        page4Description={
          <fragment>
            <span className="thq-body-small">Page Four Description</span>
          </fragment>
        }
        action1={
          <fragment>
            <span>Main Action</span>
          </fragment>
        }
        link2={
          <fragment>
            <span className="thq-link thq-body-small">Features</span>
          </fragment>
        }
        page1={
          <fragment>
            <span className="home-text003 thq-body-large">Page One</span>
          </fragment>
        }
        link1={
          <fragment>
            <span className="home-text004 thq-link thq-body-small">Home</span>
          </fragment>
        }
        page4={
          <fragment>
            <span className="home-text005 thq-body-large">Page Four</span>
          </fragment>
        }
        page2={
          <fragment>
            <span className="home-text006 thq-body-large">Page Two</span>
          </fragment>
        }
        link4={
          <fragment>
            <span className="thq-link thq-body-small">Contact</span>
          </fragment>
        }
        page1Description={
          <fragment>
            <span className="thq-body-small">Page One Description</span>
          </fragment>
        }
        page2Description={
          <fragment>
            <span className="thq-body-small">Page Two Description</span>
          </fragment>
        }
        link3={
          <fragment>
            <span className="home-text010 thq-link thq-body-small">About</span>
          </fragment>
        }
        page3={
          <fragment>
            <span className="home-text011 thq-body-large">Page Three</span>
          </fragment>
        }
        page3Description={
          <fragment>
            <span className="thq-body-small">Page Three Description</span>
          </fragment>
        }
        action2={
          <fragment>
            <span>Secondary Action</span>
          </fragment>
        }
      ></Navbar8>
      <Hero17
        action2={
          <fragment>
            <span className="thq-body-small">Learn More</span>
          </fragment>
        }
        action1={
          <fragment>
            <span className="thq-body-small">Get Started</span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="home-text016 thq-heading-1">
              Welcome to Your Smart Home Aquarium
            </span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="home-text017 thq-body-large">
              Experience the future of aquarium management with our automated
              smart home aquarium project. Monitor and control your aquarium
              from anywhere with ease.
            </span>
          </fragment>
        }
      ></Hero17>
      <Features24
        feature3Description={
          <fragment>
            <span className="thq-body-small">Controlled Lighting Settings</span>
          </fragment>
        }
        feature3Title={
          <fragment>
            <span className="thq-heading-2">Customizable Lighting</span>
          </fragment>
        }
        feature2Description={
          <fragment>
            <span className="thq-body-small">Water Quality Monitoring</span>
          </fragment>
        }
        feature1Title={
          <fragment>
            <span className="thq-heading-2">Scheduled Feeding</span>
          </fragment>
        }
        feature1Description={
          <fragment>
            <span className="thq-body-small">
              Set feeding schedules for your fish automatically.
            </span>
          </fragment>
        }
        feature2Title={
          <fragment>
            <span className="thq-heading-2">Real-time Monitoring</span>
          </fragment>
        }
      ></Features24>
      <CTA26
        heading1={
          <fragment>
            <span className="thq-heading-2">
              Ready to automate your aquarium?
            </span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="thq-body-large">
              Experience the convenience of a smart home aquarium with our
              automated system.
            </span>
          </fragment>
        }
        action1={
          <fragment>
            <span>Get started now</span>
          </fragment>
        }
      ></CTA26>
      <Features25
        feature3Description={
          <fragment>
            <span className="thq-body-small">
              Adjust the lighting in your aquarium to mimic natural day-night
              cycles.
            </span>
          </fragment>
        }
        feature1Description={
          <fragment>
            <span className="thq-body-small">
              Set up feeding schedules for your fish with precision and ease.
            </span>
          </fragment>
        }
        feature2Title={
          <fragment>
            <span className="thq-heading-2">Water Quality Monitoring</span>
          </fragment>
        }
        feature1Title={
          <fragment>
            <span className="thq-heading-2">Automated Feeding</span>
          </fragment>
        }
        feature2Description={
          <fragment>
            <span className="thq-body-small">
              Monitor and maintain optimal water conditions for your aquatic
              pets.
            </span>
          </fragment>
        }
        feature3Title={
          <fragment>
            <span className="thq-heading-2">Lighting Control</span>
          </fragment>
        }
      ></Features25>
      <Pricing14
        plan3Price={
          <fragment>
            <span className="home-text033 thq-heading-3">$29.99/month</span>
          </fragment>
        }
        plan3Action={
          <fragment>
            <span className="thq-body-small">Subscribe Now</span>
          </fragment>
        }
        plan11={
          <fragment>
            <span className="home-text035 thq-body-large">Basic plan</span>
          </fragment>
        }
        plan1Action={
          <fragment>
            <span className="thq-body-small">Subscribe Now</span>
          </fragment>
        }
        plan31={
          <fragment>
            <span className="home-text037 thq-body-large">Enterprise plan</span>
          </fragment>
        }
        plan3Feature41={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan1Feature2={
          <fragment>
            <span className="thq-body-small">Temperature monitoring</span>
          </fragment>
        }
        plan2Feature11={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan3Feature51={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan2Feature41={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan2Feature2={
          <fragment>
            <span className="thq-body-small">Water quality analysis</span>
          </fragment>
        }
        plan3Feature21={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan2Feature4={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan2Yearly={
          <fragment>
            <span className="thq-body-large">or $299 yearly</span>
          </fragment>
        }
        plan1Action1={
          <fragment>
            <span className="thq-body-small">Get started</span>
          </fragment>
        }
        plan2Action={
          <fragment>
            <span className="thq-body-small">Subscribe Now</span>
          </fragment>
        }
        plan3Feature1={
          <fragment>
            <span className="thq-body-small">All features from Plan 2</span>
          </fragment>
        }
        plan2Feature3={
          <fragment>
            <span className="thq-body-small">Customizable tank themes</span>
          </fragment>
        }
        plan1Price1={
          <fragment>
            <span className="home-text051 thq-heading-3">$200/yr</span>
          </fragment>
        }
        plan2={
          <fragment>
            <span className="home-text052 thq-body-large">Business plan</span>
          </fragment>
        }
        plan2Feature21={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan2Action1={
          <fragment>
            <span className="thq-body-small">Get started</span>
          </fragment>
        }
        plan3Feature2={
          <fragment>
            <span className="thq-body-small">Remote access via mobile app</span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="home-text056 thq-body-small">
              Choose the perfect plan for you
            </span>
          </fragment>
        }
        plan2Feature1={
          <fragment>
            <span className="thq-body-small">All features from Plan 1</span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="home-text058 thq-heading-2">Pricing plan</span>
          </fragment>
        }
        plan3Feature31={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan1={
          <fragment>
            <span className="home-text060 thq-body-large">Basic plan</span>
          </fragment>
        }
        plan21={
          <fragment>
            <span className="home-text061 thq-body-large">Business plan</span>
          </fragment>
        }
        plan1Feature11={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan1Feature21={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan3Feature5={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan2Yearly1={
          <fragment>
            <span className="thq-body-large">or $29 monthly</span>
          </fragment>
        }
        plan2Price={
          <fragment>
            <span className="home-text066 thq-heading-3">$19.99/month</span>
          </fragment>
        }
        plan3Yearly1={
          <fragment>
            <span className="thq-body-large">or $49 monthly</span>
          </fragment>
        }
        plan2Feature31={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan3Feature11={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan1Yearly1={
          <fragment>
            <span className="thq-body-large">or $20 monthly</span>
          </fragment>
        }
        plan2Price1={
          <fragment>
            <span className="home-text071 thq-heading-3">$299/yr</span>
          </fragment>
        }
        plan3Yearly={
          <fragment>
            <span className="thq-body-large">or $499 yearly</span>
          </fragment>
        }
        plan3Feature4={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan3Price1={
          <fragment>
            <span className="home-text074 thq-heading-3">$499/yr</span>
          </fragment>
        }
        plan1Feature31={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan1Feature3={
          <fragment>
            <span className="thq-body-small">Automated feeding schedule</span>
          </fragment>
        }
        plan1Yearly={
          <fragment>
            <span className="thq-body-large">or $200 yearly</span>
          </fragment>
        }
        plan1Feature1={
          <fragment>
            <span className="thq-body-small">Smart lighting control</span>
          </fragment>
        }
        plan3Feature3={
          <fragment>
            <span className="thq-body-small">
              Emergency alerts and notifications
            </span>
          </fragment>
        }
        content2={
          <fragment>
            <span className="home-text080 thq-body-large">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </fragment>
        }
        plan3Action1={
          <fragment>
            <span className="thq-body-small">Get started</span>
          </fragment>
        }
        plan1Price={
          <fragment>
            <span className="home-text084 thq-heading-3">$9.99/month</span>
          </fragment>
        }
        plan3={
          <fragment>
            <span className="home-text085 thq-body-large">Enterprise plan</span>
          </fragment>
        }
      ></Pricing14>
      <Steps2
        step1Description={
          <fragment>
            <span className="home-text086 thq-body-small">
              Prepare the aquarium by cleaning it thoroughly and adding the
              necessary substrate and decorations.
            </span>
          </fragment>
        }
        step3Description={
          <fragment>
            <span className="home-text087 thq-body-small">
              Download the dedicated app for the smart home aquarium project and
              follow the on-screen instructions to connect your devices.
            </span>
          </fragment>
        }
        step2Title={
          <fragment>
            <span className="thq-heading-2">Install the smart devices</span>
          </fragment>
        }
        step2Description={
          <fragment>
            <span className="home-text089 thq-body-small">
              Install the automated feeder, heater, and lighting system in the
              aquarium according to the manufacturer&apos;s instructions.
            </span>
          </fragment>
        }
        step1Title={
          <fragment>
            <span className="thq-heading-2">Set up the aquarium</span>
          </fragment>
        }
        step3Title={
          <fragment>
            <span className="thq-heading-2">Connect to the app</span>
          </fragment>
        }
        step4Description={
          <fragment>
            <span className="home-text092 thq-body-small">
              Adjust feeding schedules, temperature settings, and lighting
              preferences through the app to create the perfect environment for
              your aquatic pets.
            </span>
          </fragment>
        }
        step4Title={
          <fragment>
            <span className="thq-heading-2">Customize settings</span>
          </fragment>
        }
      ></Steps2>
      <Testimonial17
        author2Position={
          <fragment>
            <span className="thq-body-small">Marine Biologist</span>
          </fragment>
        }
        author1Position={
          <fragment>
            <span className="thq-body-small">Aquarium Enthusiast</span>
          </fragment>
        }
        author1Name={
          <fragment>
            <span className="thq-body-large">John Doe</span>
          </fragment>
        }
        author3Name={
          <fragment>
            <span className="thq-body-large">David Lee</span>
          </fragment>
        }
        review2={
          <fragment>
            <span className="home-text098 thq-body-small">
              As a marine biologist, I appreciate the precision and accuracy of
              this automated system. It ensures the optimal conditions for
              marine life, making it a valuable tool for both hobbyists and
              professionals.
            </span>
          </fragment>
        }
        author2Name={
          <fragment>
            <span className="thq-body-large">Jane Smith</span>
          </fragment>
        }
        author4Position={
          <fragment>
            <span className="thq-body-small">Environmental Scientist</span>
          </fragment>
        }
        author4Name={
          <fragment>
            <span className="thq-body-large">Sarah Johnson</span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="home-text102 thq-body-small">
              I have been using this smart home aquarium system for a few months
              now, and I am amazed by how easy it is to maintain my aquarium.
              The automation features have made my life so much simpler!
            </span>
          </fragment>
        }
        author3Position={
          <fragment>
            <span className="thq-body-small">Tech Enthusiast</span>
          </fragment>
        }
        review1={
          <fragment>
            <span className="home-text104 thq-body-small">
              I highly recommend this smart home aquarium project to anyone who
              wants to enjoy their aquarium without the hassle of manual
              maintenance.
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="thq-heading-2">Testimonials</span>
          </fragment>
        }
        review3={
          <fragment>
            <span className="home-text106 thq-body-small">
              I love how I can control and monitor my aquarium from anywhere
              using my smartphone. The smart features of this system have truly
              elevated my aquarium experience.
            </span>
          </fragment>
        }
        review4={
          <fragment>
            <span className="home-text107 thq-body-small">
              This smart home aquarium project aligns perfectly with sustainable
              practices in aquaculture. It promotes responsible fishkeeping
              while providing a seamless user experience.
            </span>
          </fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <fragment>
            <span className="thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </fragment>
        }
        location1Description={
          <fragment>
            <span className="thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="thq-heading-2">Locations</span>
          </fragment>
        }
        location2Description={
          <fragment>
            <span className="thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </fragment>
        }
        location1={
          <fragment>
            <span className="home-text112 thq-heading-3">Bucharest</span>
          </fragment>
        }
        location2={
          <fragment>
            <span className="home-text113 thq-heading-3">Cluj - Napoca</span>
          </fragment>
        }
      ></Contact10>
      <Footer4
        link5={
          <fragment>
            <span className="thq-body-small">FAQs</span>
          </fragment>
        }
        link3={
          <fragment>
            <span className="thq-body-small">Services</span>
          </fragment>
        }
        link1={
          <fragment>
            <span className="thq-body-small">Home</span>
          </fragment>
        }
        termsLink={
          <fragment>
            <span className="thq-body-small">Terms and Conditions</span>
          </fragment>
        }
        link2={
          <fragment>
            <span className="thq-body-small">About Us</span>
          </fragment>
        }
        link4={
          <fragment>
            <span className="thq-body-small">Contact Us</span>
          </fragment>
        }
        cookiesLink={
          <fragment>
            <span className="thq-body-small">Cookies Policy</span>
          </fragment>
        }
        privacyLink={
          <fragment>
            <span className="home-text121 thq-body-small">Privacy Policy</span>
          </fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
