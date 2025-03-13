import React from "react";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import CountryDropdown from "./components/CountryDropdown"; // Adjust import path
// import CountryRegionSelector from "./components/CountryRegionSelector";
// import curl from "highlightjs-curl";
import Nav from "./components/Nav";
import "./styling/style.css";

function Landing() {
  const codeSamples = {
    php: {
      code: `<?php
$mocean = new \Mocean\Client(
        new \Mocean\Client\Credentials\Basic('API_KEY_HERE', 'API_SECRET_HERE')
);

$result = $mocean->message()->send([
    'mocean-to' => '60123456789',
    'mocean-from' => 'MOCEAN',
    'mocean-text' => 'Hello World',
    'mocean-resp-format' => 'json'
]);

echo $result;
?>`,
      language: "php",
    },
    python: {
      code: `from moceansdk import Client, Basic, Transmitter

mocean = Client(
    Basic("API_KEY_HERE", "API_SECRET_HERE")
)

res = mocean.sms.create({
    "mocean-from": "MOCEAN",
    "mocean-to": 60123456789,
    "mocean-text": "Hello World"
}).send()

print(res)`,
      language: "python",
    },
    nodejs: {
      code: `const moceansdk = require('mocean-sdk');

const mocean = new moceansdk.Mocean(
        new moceansdk.Client('API_KEY_HERE', 'API_SECRET_HERE')
);

mocean.sms().send({
  mocean-from: 'MOCEAN',
  mocean-to: '60123456789',
  mocean-text: 'Hello World'
}, function(err, res) {
  if(err) throw err;

  console.log(res);
});`,
      language: "javascript",
    },
    ruby: {
      code: `require 'moceansdk'

mocean = Moceansdk::Client.new(
    Moceansdk::Auth::Basic.new('API_KEY_HERE', 'API_SECRET_HERE')
)

res = mocean.sms.create({
        "mocean-text"=>'Hello World',
        "mocean-from"=>'MOCEAN',
        "mocean-to"=>'60123456789'
        }).send()

print res`,
      language: "ruby",
    },
    java: {
      code: `Mocean mocean = new Mocean(
                new Basic("API_KEY_HERE", "API_SECRET_HERE")
);

String res = mocean.sms()
             .setFrom("MOCEAN")
             .setTo("60123456789")
             .setText("Hello World")
             .send();

System.out.println(res);`,
      language: "java",
    },
  };
  const [activeTab, setActiveTab] = useState("php");

  const [selectedCountry, setSelectedCountry] = useState("");
  const [captchaStatus, setCaptchaStatus] = useState(false);
  // React Turnstile - reCaptcha

  const handleCountryChange = (countryCode) => {
    setSelectedCountry(countryCode);
    console.log("Selected country in parent:", countryCode);
  };

  // Form handling
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(captchaStatus);
  };
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
          <div className="button-group btn-group-2">
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
                <div className="title">Marketing Message</div>
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
            <img src={require("./img/icon_voice.png")} alt="" />
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
        <div className="button-group btn-group-2">
          <button>Learn more</button>
          <button>Try for free</button>
        </div>
      </section>

      <section className="landing-whatsapp la-wa2">
        <div className="landing-whatsapp-left">
          <h2>
            Over <span>Two Decades</span> of SMS Expertise
          </h2>

          <p>
            With over two decades of experience, we've not only witnessed the
            evolution of SMS, but we've actively shaped it. Our commitment to
            innovation ensures that you receive cutting-edge solutions, built on
            a foundation of proven success.
          </p>
          <p>
            Leverage our 20+ years of experience for your SMS needs. We provide
            reliable, expert solutions you can count on
          </p>
        </div>
        <img src={require("./img/server.webp")} alt="" />
      </section>
      <section className="landing-whatsapp dark">
        <img src={require("./img/ph_flag.webp")} alt="" />

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
      </section>
      <section className="landing-whatsapp dark last">
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
        <img src={require("./img/work.webp")} alt="" />
      </section>
      <section id="feature-api" className="landing-features api-feature">
        <h1 className="">
          SMS API For <span>Developers</span>
        </h1>
        <p className="">
          Build powerful SMS capabilities into your applications with our
          intuitive SMS API. Our API offers seamless integration, comprehensive
          documentation, and reliable message delivery. Get started quickly and
          effortlessly enhance your applications with reliable SMS
          functionality.
        </p>
        <div className="syntax-highlighter">
          <div className="button-group">
            <button
              onClick={() => setActiveTab("php")}
              className={activeTab === "php" ? "activeTab" : ""}
            >
              PHP
            </button>
            <button
              onClick={() => setActiveTab("python")}
              className={activeTab === "python" ? "activeTab" : ""}
            >
              Python
            </button>
            <button
              onClick={() => setActiveTab("nodejs")}
              className={activeTab === "nodejs" ? "activeTab" : ""}
            >
              NodeJS
            </button>
            <button
              onClick={() => setActiveTab("ruby")}
              className={activeTab === "ruby" ? "activeTab" : ""}
            >
              Ruby
            </button>
            <button
              onClick={() => setActiveTab("java")}
              className={activeTab === "java" ? "activeTab" : ""}
            >
              Java
            </button>
          </div>

          <SyntaxHighlighter
            language={codeSamples[activeTab].language}
            style={atomOneLight}
          >
            {codeSamples[activeTab].code}
          </SyntaxHighlighter>
        </div>
        <div className="button-group btn-group-2">
          <button>View SDK & Library</button>
          <button>Documentation</button>
        </div>
      </section>
      <section id="footer" className="contact-us">
        <div className="landing-closing">
          <h2>Enterprise Business Text Messaging Features</h2>
          <p>
            Trial account: No risk, just results! Reach your customers on their
            favorite messaging channels using an intuitive, secure, and powerful
            business texting platform.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="">Email</label>
              <input
                type="email"
                id="email"
                required
                placeholder="Enter your email"
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="">Name</label>
              <input type="name" id="name" required placeholder="Your name" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="">Country</label>
              <CountryDropdown onCountryChange={handleCountryChange} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="">Message</label>
              <textarea
                type="name"
                id="name"
                required
                placeholder="Your message here"
              />
            </div>
            <button type="submit">Submit</button>

            <Turnstile
              siteKey="0x4AAAAAAA_lqJ0w01-K480l"
              options={{
                theme: "light",
              }}
              onError={() => setCaptchaStatus(false)}
              onExpire={() => setCaptchaStatus(false)}
              onSuccess={() => setCaptchaStatus(true)}
            />
          </form>
        </div>
      </section>
      <section className="landing-footer">
        <footer>
          <div className="footer-logo">
            <img src={require("./img/mocean-logo-full-dark.png")} alt="" />
            <p>
              Send SMS messages quickly and easily. Manage your campaigns, track
              deliveries, and connect with your audience anytime, anywhere.
            </p>
          </div>
          <div className="footer-links">
            <ul>
              <h3>Products</h3>
              <li>
                <Link to="https://moceanapi.com/sms/">SMS</Link>
              </li>
              <li>
                <Link to="https://moceanapi.com/whatsapp/">WhatsApp</Link>
              </li>
              <li>
                <Link to="https://moceanapi.com/voice/">Voice</Link>
              </li>
              <li>
                <Link to="https://moceanapi.com/verify/">Verify</Link>
              </li>
              <li>
                <Link to="https://moceanapi.com/number-lookup/">
                  Number Lookup
                </Link>
              </li>
              <li>
                <Link to="https://moceanapi.com/intergration/">
                  Integration
                </Link>
              </li>
            </ul>
            <ul>
              <h3>Documents</h3>
              <li>
                <Link to="https://moceanapi.com/docs/#sms-api/">SMS API</Link>
              </li>
              <li>
                <Link to="https://moceanapi.com/docs/#whatsapp-api/">
                  WhatsApp API
                </Link>
              </li>
              <li>
                <Link to="https://moceanapi.com/docs/#voice-api/">
                  Voice API
                </Link>
              </li>
              <li>
                <Link to="https://moceanapi.com/docs/#verify-api/">
                  Verify API
                </Link>
              </li>
              <li>
                <Link to="https://moceanapi.com/docs/#number-lookup-api/">
                  Number Lookup API
                </Link>
              </li>
              <li>
                <Link to="https://moceanapi.com/developer/libraries">
                  SDK & Libraries
                </Link>
              </li>
              <li>
                <Link to="https://moceanapi.com/developer/libraries">
                  Tools
                </Link>
              </li>
            </ul>
            <ul>
              <h3>Resources</h3>
              <li>
                <Link to="https://moceanapi.com/resources/use-case/">
                  Use Case
                </Link>
              </li>
              <li>
                <Link to="https://moceanapi.com/pricing/">Pricing</Link>
              </li>
              <li>
                <Link to="https://moceanapi.com/support/">Support</Link>
              </li>
              <li>
                <Link to="https://moceanapi.com/faq/">FAQ</Link>
              </li>
            </ul>
            <ul>
              <h3>Company</h3>
              <li>
                <Link to="https://moceanapi.com/use-case/">About Us</Link>
              </li>
              <li>
                <Link to="https://moceanapi.com/sms/">Contact</Link>
              </li>
              <li>
                <Link to="https://dashboard.moceanapi.com/login/">Login</Link>
              </li>
              <li>
                <Link to="https://dashboard.moceanapi.com/register/">
                  Sign up
                </Link>
              </li>
            </ul>
            <ul>
              <h3>Legal</h3>
              <li>
                <Link to="https://moceanapi.com/legal/terms/">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link to="https://moceanapi.com/legal/privacy/">Privacy</Link>
              </li>
              <li>
                <Link to="https://moceanapi.com/legal/refund-policy/">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="https://www.paypal.com/ie/legalhub/paypal/acceptableuse-full">
                  Paypal Acceptable
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-legal">
            <p>2025 © Micro Ocean Technologies Sdn. Bhd.</p>
            <div className="footer-socials">
              <Link to="https://moceanapi.com/sms/.com">
                <img src={require("./img/whatsapp-icon.png")} alt="" />
              </Link>
              <Link to="https://moceanapi.com/sms/.com">
                <img src={require("./img/messenger-icon.png")} alt="" />
              </Link>
              <Link to="https://moceanapi.com/sms/.com">
                <img src={require("./img/email-icon.png")} alt="" />
              </Link>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default Landing;
