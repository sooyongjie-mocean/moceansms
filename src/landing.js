import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";

import Nav from "./components/Nav";

import "./styling/style.css";

function landing(props) {
  return (
    <div className="landing-container">
      <Nav />
      <section id="hero" className="landing-wrapper">
        <div className="landing-hero">
          {/* <div className="icon-group">
              <img src={require("./img/laz_icon.png")} alt="" />
              <img src={require("./img/shopee_logo.png")} alt="" />
            </div> */}
          <h1>
            <span>Power up</span> your messaging game
          </h1>
          <p>
            Enhance your communication strategy with our reliable SMS services
            in the Philippines. Send OTPs, notifications, and marketing messages
            for just $0.008 (PHP 0.463) per message. Experience fast,
            dependable, and streamlined messaging solutions.
          </p>
          <div className="button-group">
            <button>Learn more</button>
            <button>Try for free</button>
          </div>
          <div className="statistics">
            <h3>Omnichannel messaging ready</h3>
            <div className="icon-group">
              <img src={require("./img/icon_sms2.png")} alt="" />
              <img src={require("./img/icon_wa.png")} alt="" />
            </div>
          </div>
          <Turnstile siteKey="0x4AAAAAAA_lqJ0w01-K480l" />
          <div className="messages-wrapper">
            <div className="message message-md">
              <div className="icon">
                <img src={require("./img/icon_msg_sms.png")} alt="" />
              </div>
              <div className="content">
                <div className="title">OTP</div>
                <div className="body">
                  Your verification Code is 232323. Please do not share it with
                  anyone.
                </div>
              </div>
            </div>
            <div className="message message-md sms">
              <div className="icon">
                <img src={require("./img/icon_msg_wa.png")} alt="" />
              </div>
              <div className="content">
                <div className="title">Marketing SMS</div>
                <div className="body">
                  Nakakuha ka ng Libreng Facial Treatment! Available para sa
                  unang 50 bagong customer hanggang 30/9. I-click ang link para
                  mag-redeem.
                </div>
              </div>
            </div>
            <div className="message message-md">
              <div className="icon">
                <img src={require("./img/icon_msg_sms_2.png")} alt="" />
              </div>
              <div className="content">
                <div className="title">Alert SMS</div>
                <div className="body">
                  Your parcel has been delivered on Mar 4. Thank you for using
                  our courier service.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="feature-summary" className="landing-features">
        <h1 className="">
          Send Thousands of <span>Personalized Text Messages</span> at Once
        </h1>
        <p className="">
          Now you can message your entire customer base at once while
          maintaining a one-to-one connection with every customer. That’s
          personalized messaging at scale.
        </p>
        <div className="feature-group">
          <div className="landing-feature">
            <img src={require("./img/icon_sms.png")} alt="" />
            <h3 className="feature-title">SMS</h3>
            <p className="feature-description">
              Deliver and receive SMS messages in every country around the
              world.
            </p>
          </div>
          <div className="landing-feature">
            <img src={require("./img/icon_verified.png")} alt="" />
            <h3 className="feature-title">Verify</h3>
            <p className="feature-description">
              Prioritize security in your business, prevent the increasing
              counts of frauds and scams, to ensure the top quality for your
              business.
            </p>
          </div>
          <div className="landing-feature">
            <img src={require("./img/icon_action.png")} alt="" />
            <h3 className="feature-title">Voice</h3>
            <p className="feature-description">
              Lead the conversation by making, retrieving, controling and
              monitoring calls to deliver a better customer experience
            </p>
          </div>
          <div className="landing-feature">
            <img src={require("./img/icon_person.png")} alt="" />
            <h3 className="feature-title">Number Lookup</h3>
            <p className="feature-description">
              Reduce undeliverable messages, identify phone numbers by getting
              information about it to learn about it validatity and much more.
            </p>
          </div>
          <div className="landing-feature">
            <img src={require("./img/icon_integration.png")} alt="" />
            <h3 className="feature-title">Integration</h3>
            <p className="feature-description">
              Integrate Messaging service with your ecommerce business, and
              build a better relationship with your buyers.
            </p>
          </div>
          <div className="landing-feature">
            <img src={require("./img/icon_coding.png")} alt="" />
            <h3 className="feature-title">Developer Friendly</h3>
            <p className="feature-description">
              We offer a robust, reliable service. Our Gateway is built to
              handle traffic redundancy, ensuring that no message is lost in the
              process, regardless of the volume.
            </p>
          </div>
        </div>
        <div className="button-group">
          <button>Learn more</button>
          <button>Try for free</button>
        </div>
      </section>
      <section className="landing-whatsapp la-wa2">
        <div className="landing-whatsapp-left">
          <h2>Trust Trust Trust</h2>
          <p>
            Mocean is a trusted name in the SMS industry, having served over
            (company num) businesses throughout our 21 years of experience. We
            have sent over (sms_count) number of messages in the Philippines.
          </p>
        </div>
        <img src={require("./img/server.jpg")} alt="" />
      </section>
      <section className="landing-whatsapp light">
        <div className="landing-whatsapp-left">
          <h2>Technology & Reliability</h2>
          <p>
            Our advanced SMS gateway ensures lightning-fast delivery, 99.9%
            uptime, and seamless reach across all networks in the Philippines.
          </p>
          <p>
            MOCEAN’s secure and scalable SMS API seamlessly integrates with your
            systems for effortless automation.
          </p>
        </div>
        <img src={require("./img/wa_promo.png")} alt="" />
      </section>
      <section className="landing-whatsapp dark">
        <div className="landing-whatsapp-left">
          <h2>Compliance & Security</h2>
          <p>
            MOCEAN adheres to Philippines telecom regulations and ensures full
            compliance with data security standards, protecting both your
            business and your customers.
          </p>
          <p>
            We ensure fast, reliable, and cost-efficient messaging with direct
            connections to Philippines telecom networks.
          </p>
        </div>
        <img src={require("./img/wa_promo.png")} alt="" />
      </section>
      <section id="footer" className="landing-footer">
        <div className="landing-closing">
          <h2>Enterprise Business Text Messaging Features</h2>
          <p>
            Reach your customers on their favorite messaging channels using an
            intuitive, secure, and powerful business texting platform.
          </p>
          <div className="button-group">
            <button>Contact us</button>
            <button>Try for free</button>
          </div>
        </div>
        <footer>
          <img src={require("./img/mocean-logo-full.png")} alt="" />
          <p>
            Send SMS messages quickly and easily. Manage your campaigns, track
            deliveries, and connect with your audience anytime, anywhere.
          </p>
          <div className="WHAT-GROUP">
            <p>2025 © Micro Ocean Technologies Sdn. Bhd.</p>
            <div className="landing-footer-links-contacts">
              <Link to="https://google.com">
                <img src={require("./img/whatsapp-icon.png")} alt="" />
              </Link>
              <Link to="https://google.com">
                <img src={require("./img/messenger-icon.png")} alt="" />
              </Link>
              <Link to="https://google.com">
                <img src={require("./img/email-icon.png")} alt="" />
              </Link>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default landing;
