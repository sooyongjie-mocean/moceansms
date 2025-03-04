import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import "./styling/style.css";

function landing(props) {
  return (
    <div className="landing-container">
      <section className="landing-wrapper">
        <div className="landing-hero">
          <img
            className="landing-logo"
            src={require("./img/mocean-logo-full-dark.png")}
            alt=""
          />
          <h1>
            <span>Personalized</span> business text messaging
          </h1>
          <p>
            Reach your customers on any messaging channel, all from one shared
            inbox that works across web and mobile. Heymarket makes business
            texting intuitive, secure, and reliable so you can focus on what
            counts – your customers.
          </p>
          <div className="button-group">
            <button>Learn more</button>
            <button>Try for free</button>
          </div>
          <div className="statistics">
            <h3>Securing 100 Million Texts Monthly</h3>
            <div className="icon-group">
              <img src={require("./img/laz_icon.png")} alt="" />
              <img src={require("./img/shopee_logo.png")} alt="" />
            </div>
          </div>
          
        <div className="messages-wrapper">
          <div className="message message-md">
            <div className="icon">
            <img src={require("./img/msg_cimb_icon.png")} alt="" />
            </div>
            <div className="content">
              <div className="title">CIMB Bank</div>
              <div className="body">
                RM0 CIMB: MYR 270.00 was charged on your card...
              </div>
            </div>
          </div>
          <div className="message message-md sms">
            <div className="icon">
            <img src={require("./img/msg_sms_icon.png")} alt="" />
            </div>
            <div className="content">
              <div className="title">Shopee</div>
              <div className="body">
                RM0 Shopee: 12.12 sales is coming! Enjoy up to ...
              </div>
            </div>
          </div>
          <div className="message message-md">
            <div className="icon">
            <img src={require("./img/msg_laz_icon.png")} alt="" />
            </div>
            <div className="content">
              <div className="title">CIMB Bank</div>
              <div className="body">
                RM0 CIMB: MYR 270.00 was charged on your card...
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
      <section className="landing-features">
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
            <img src={require("./img/icon_campaign.png")} alt="" />
            <h3 className="feature-title">Customer lists and drip campaigns</h3>
            <p className="feature-description">
              Segment customers into lists and run drip campaigns to share
              targeted information.
            </p>
          </div>
          <div className="landing-feature">
            <img src={require("./img/icon_template.png")} alt="" />
            <h3 className="feature-title">Custom fields and templates</h3>
            <p className="feature-description">
              Share messages across a team and reply with a shared inbox.
              Administrators have full control over permissions.
            </p>
          </div>
          <div className="landing-feature">
            <img src={require("./img/icon_action.png")} alt="" />
            <h3 className="feature-title">
              Triggered actions from customer behavior
            </h3>
            <p className="feature-description">
              Send automated replies with custom fields based on customer
              response, time, or other behaviors.
            </p>
          </div>
          <div className="landing-feature">
            <img src={require("./img/icon_campaign.png")} alt="" />
            <h3 className="feature-title">Customer lists and drip campaigns</h3>
            <p className="feature-description">
              Segment customers into lists and run drip campaigns to share
              targeted information.
            </p>
          </div>
          <div className="landing-feature">
            <img src={require("./img/icon_template.png")} alt="" />
            <h3 className="feature-title">Custom fields and templates</h3>
            <p className="feature-description">
              Share messages across a team and reply with a shared inbox.
              Administrators have full control over permissions.
            </p>
          </div>
          <div className="landing-feature">
            <img src={require("./img/icon_action.png")} alt="" />
            <h3 className="feature-title">
              Triggered actions from customer behavior
            </h3>
            <p className="feature-description">
              Send automated replies with custom fields based on customer
              response, time, or other behaviors.
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
          <h2>WhatsApp is the future of Messaging</h2>
          <p>
            Send marketing messages on WhatsApp using Broadcast or Flow on our
            customer engagement solution Moments, or over our flexible WhatsApp
            API.
          </p>
        </div>
        <img src={require("./img/wa_promo.png")} alt="" />
      </section>
      <section className="landing-footer">
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
