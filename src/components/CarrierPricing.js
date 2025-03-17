import { useState, useEffect } from "react";
import jsonData from "../pricing.json"; // Import the JSON file
import ButtonGroup from "./ButtonGroup";

function CarrierPricing() {
  const [tableData, setTableData] = useState({
    PH: [{ id: 1, name: "Philippines", price: "USD 0.008 (PHP 0.463)" }],
  });

  const countries = {
    PH: "Philippines",
  };

  // useEffect(() => {
  //   setTableData(jsonData); // Set the imported JSON data to state
  // }, []); // Empty dependency array means this effect runs only once (on mount)

  const [selectedOption, setSelectedOption] = useState("PH");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    document
      .getElementById("contact-us")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="landing-features pricing">
      <h1>
        SMS Pricing for <span>Philippines</span>
      </h1>
      <p>
        Connect with our sales team today to get exclusive bulk discounts and
        tailored solutions to improve business communication and customer
        engagement.
      </p>
      <div className="pricing-wrapper">
        {/* 
        <div className="selector-wrapper">
          <select
            name="pricing-country"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            {Object.keys(tableData).map((countryCode) => (
              <option key={countryCode} value={countryCode}>
                {countries[countryCode]}
              </option>
            ))}
          </select>
          <select name="pricing-currency">
            <option value="USD">US Dollar (USD)</option>
          </select>
        </div>
        */}
        <table>
          <thead>
            <tr>
              <th>Country</th>
              <th>Price per SMS</th>
            </tr>
          </thead>
          <tbody>
            {tableData[selectedOption].map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="button-group btn-group-2">
        <a href="#contact-us" onClick={handleClick}>
          <button>Contact us</button>
        </a>
        <a href="https://dashboard.moceanapi.com/register">
          <button>Try for free</button>
        </a>
      </div>
    </section>
  );
}

export default CarrierPricing;
