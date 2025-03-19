import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { ReactSVG } from "react-svg";
import FeatureShowcase from "./components/FeatureShowcase";
import { Turnstile } from "@marsidev/react-turnstile";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import CountryDropdown from "./components/CountryDropdown"; // Adjust import path
// import CountryRegionSelector from "./components/CountryRegionSelector";
// import curl from "highlightjs-curl";
import CarrierPricing from "./components/CarrierPricing";
import Nav from "./components/Nav";
import { ReactComponent as messengerIcon } from "./img/icon-messenger.svg";
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
  const [captchaStatus, setCaptchaStatus] = useState(false); // React Turnstile - reCaptcha
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: selectedCountry,
    message: "",
  });
  const [turnstileToken, setTurnstileToken] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("Handling change to FormData 📝");
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      country: selectedCountry,
    }));
  }, [selectedCountry]);

  const handleClick = (e) => {
    e.preventDefault();
    document
      .getElementById("contact-us")
      .scrollIntoView({ behavior: "smooth" });
  };

  const handleCountryChange = (countryCode) => {
    setSelectedCountry(countryCode);
    console.log("Selected country in parent:", countryCode);
  };

  // Turnstile callback functions
  const handleTurnstileSuccess = (token) => {
    console.log("handleTurnstileSuccess: ", token);
    setTurnstileToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // First, validate Turnstile token
      if (!turnstileToken) {
        setStatus({
          type: "error",
          message: "Please complete the Turnstile challenge",
        });
        setLoading(false);
        return;
      }

      // Submit form data and token to your backend API
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          turnstileToken,
        }),
      });

      console.log("response: ", response);

      const data = await response.json();

      if (response.ok) {
        // Clear form on success
        alert(
          "Your message has been received. Our team will get back to you soon."
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          country: "",
          message: "",
        });
        setStatus({ type: "success", message: data.message });
        // Reset Turnstile
        window.turnstile.reset();
        setTurnstileToken("");
      } else {
        setStatus({ type: "error", message: data.message });
      }
    } catch (err) {
      setStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
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
            Naghahanap ng Mabilis at Maaasahang{" "}
            <span>SMS Gateway sa Pilipinas</span>?
          </h1>
          <div className="landing-body">
            <p>
              Enhance your communication strategy with our reliable SMS services
              in the{" "}
              <span className="flag-wrapper">
                <img src={require("./img/flag_ph.png")} alt="" />
              </span>
              <span> Philippines</span>. Send OTPs, notifications, and marketing
              messages for just $0.008 (PHP 0.463) per message.
            </p>
            <p>
              Experience fast, dependable, and streamlined messaging solutions.
            </p>
          </div>
          <div className="button-group btn-group-2">
            <a href="#contact-us" onClick={handleClick}>
              <button>Contact us</button>
            </a>
            <a href="https://dashboard.moceanapi.com/register">
              <button>Try for free</button>
            </a>
          </div>
          <div className="statistics">
            <h3>Omnichannel messaging ready</h3>
            <div className="icon-group">
              <img src={require("./img/icon-message-alt.png")} alt="" />
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
          Feature-packed <span>Messaging API</span> at your fingertips
        </h1>
        <p className="">
          Now you can message your entire customer base at once while
          maintaining a one-to-one connection with every customer. That’s
          personalized messaging at scale.
        </p>
        <div className="feature-group">
          <FeatureShowcase
            title="SMS"
            imgURL={require("./img/icon_sms2.png")}
            body="Starting at just $0.008 per message, we offer competitive rates in
              the industry without compromising on quality."
            scrollIntoView="pricing"
          />
          <FeatureShowcase
            title="WhatsApp Messaging"
            imgURL={require("./img/icon_wa.png")}
            body="Broadcast messages across the world with higher click-through rates and higher user engagement."
            linkURL="https://moceanapi.com/whatsapp"
          />
          <FeatureShowcase
            title="Voice"
            imgURL={require("./img/icon_voice.png")}
            body="Lead the conversation by making, retrieving, controling and
              monitoring calls to deliver a better customer experience"
            linkURL="https://moceanapi.com/voice"
          />
          <FeatureShowcase
            title="Compliance"
            imgURL={require("./img/icon_verified.png")}
            body="Prioritize security in your business, prevent the increasing
              counts of frauds and scams, to ensure the top quality for your
              business."
            scrollIntoView="features"
          />
          <FeatureShowcase
            title="Number Lookup"
            imgURL={require("./img/icon_person.png")}
            body="Reduce undeliverable messages by obtaining information such as number validatity."
            linkURL="https://moceanapi.com/number-lookup"
          />
          <FeatureShowcase
            title="Integration"
            imgURL={require("./img/icon_integration.png")}
            body="Integrate Messaging service with your ecommerce business, and build a better relationship with your buyers."
            linkURL="https://moceanapi.com/developer/integration"
          />
        </div>
      </section>
      <section className="landing-whatsapp la-wa2" id="features">
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
        <img src={require("./img/work.webp")} alt="" />
      </section>
      <section className="landing-whatsapp dark">
        <img src={require("./img/ph_flag.webp")} alt="" />
        <div className="landing-whatsapp-left">
          <h2>
            Peace of Mind Through <span>Security & Compliance</span>
          </h2>
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
      <section className="landing-whatsapp dark ">
        <div className="landing-whatsapp-left">
          <h2>
            <span>Reliable Technology</span> for Your Business
          </h2>
          <p>
            Our advanced SMS gateway ensures lightning-fast delivery, 99.9%
            uptime, and seamless reach across all networks in the Philippines.
          </p>
          <p>
            MOCEAN’s secure and scalable SMS API seamlessly integrates with your
            systems for effortless automation.
          </p>
        </div>
        <img src={require("./img/server.webp")} alt="" />
      </section>
      <section className="landing-whatsapp dark last">
        <img src={require("./img/customer.webp")} alt="" />
        <div className="landing-whatsapp-left">
          <h2>
            <span>Customer Success</span> Across the Philippines
          </h2>
          <p>
            Many businesses worldwide trust MOCEAN for their SMS communication
            needs.
          </p>
          <p>
            With direct connections to Philippines telecom networks, we ensure
            fast, reliable, and cost-efficient messaging.
          </p>
        </div>
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
          <a href="https://moceanapi.com/developer/libraries">
            <button>View SDK & Libraries</button>
          </a>
          <a href="https://moceanapi.com/docs/">
            <button>Documentation</button>
          </a>
        </div>
      </section>
      <section className="moceansms">
        <div className="message-container">
          <h1>Broadcast Messages Without Coding</h1>
          <p>
            Our web SMS portal at <a href="www.moceansms.com ">moceansms.com</a>{" "}
            lets you send broadcasts instantly without writing a single line of
            code.
          </p>
          <div className="moceansms-showcase">
            <img src={require("./img/icon_dashboard.png")} alt="" />
            <h2>Mocean Dashboard</h2>
            <p>
              Segment customers into lists and run drip campaigns to share
              targeted information.
            </p>
            <button>Check it out</button>
            <div className="moceansms-preview">
              <div className="moceansms-dropdown">SMS Message</div>
            </div>
          </div>
        </div>
      </section>
      <CarrierPricing />
      <section id="contact-us" className="contact-us">
        <div className="landing-closing">
          <h2>Want to dive right in?</h2>
          <p>
            Start sending messages right away with our free trial. NO credit
            card required.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="">Name</label>
              <input
                type="name"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="tel">Contact number</label>
              <input
                type="tel"
                id="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Your contact number"
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="">Country</label>
              <CountryDropdown onCountrySelect={handleCountryChange} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="">Message</label>
              <textarea
                type="name"
                id="name"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message here"
              />
            </div>
            <button type="submit">Submit</button>
            {/* Turnstile component */}
            <Turnstile
              siteKey="0x4AAAAAAA_lqJ0w01-K480l"
              options={{
                theme: "light",
              }}
              onError={() => setCaptchaStatus(false)}
              onExpire={() => setCaptchaStatus(false)}
              onSuccess={handleTurnstileSuccess}
            />
          </form>
        </div>
      </section>
      <section className="landing-footer">
        <footer>
          <div className="footer-logo">
            {/* <img src={require("./img/mocean-logo-full-dark.png")} alt="" /> */}
            <h2>Mocean</h2>
            <p>
              Send SMS messages quickly and easily. Manage your campaigns, track
              deliveries, and connect with your audience anytime, anywhere.
            </p>
            <div className="footer-socials">
              <ul>
                <li>
                  <img src={require("./img/icon_phone.png")} alt="" />
                  <a href="tel:+60173788399">
                    <span>+</span>60 17<span>-</span>378 8399
                  </a>
                </li>
                <li>
                  <img src={require("./img/icon_mail.png")} alt="" />
                  <a href="tel:+60173788399">
                    <span>+</span>60 17<span>-</span>378 8399
                  </a>
                </li>
                <li>
                  <img src={require("./img/icon_office.png")} alt="" />
                  <a href="tel:+60173788399">
                    <span>+</span>03<span>-</span>89964780
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-links">
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
              <h3>Company</h3>
              <li>
                <Link to="https://moceanapi.com/about-us/">About Us</Link>
              </li>
              <li>
                <a href="#contact-us">Contact Us</a>
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
                <a href="https://moceanapi.com/legal/terms">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <Link to="https://moceanapi.com/legal/privacy">Privacy</Link>
              </li>
              <li>
                <Link to="https://moceanapi.com/legal/refund-policy">
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
          </div>
        </footer>
      </section>
    </div>
  );
}

export default Landing;
