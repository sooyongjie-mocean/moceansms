import { useState, useEffect } from "react";
import jsonData from "../pricing.json"; // Import the JSON file

function CarrierPricing() {
  const [tableData, setTableData] = useState({
    MY: [
      { id: 1, name: "Celcom", price: 1.25 },
      { id: 2, name: "Digi", price: 1.25 },
      { id: 3, name: "Maxis", price: 1.25 },
      { id: 4, name: "U Mobile", price: 1.25 },
      { id: 5, name: "Webe", price: 1.25 },
      { id: 6, name: "XOX", price: 1.25 },
      { id: 7, name: "YES", price: 1.25 },
    ],
    PH: [
      { id: 8, name: "Singtel", price: 50 },
      { id: 9, name: "Starhub", price: 60 },
    ],
    SG: [
      { id: 10, name: "Global Telecom", price: 30 },
      { id: 11, name: "Smart Commmunications", price: 40 },
    ],
  });

  const countries = {
    MY: "Malaysia",
    PH: "Philippines",
    SG: "Singapore",
  };

  // useEffect(() => {
  //   setTableData(jsonData); // Set the imported JSON data to state
  // }, []); // Empty dependency array means this effect runs only once (on mount)

  const [selectedOption, setSelectedOption] = useState("MY");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <section id="pricing" className="pricing">
      <h1>Price breakdown</h1>
      <div className="pricing-wrapper">
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
            <option value="MY">Malaysian Ringgit (RM)</option>
          </select>
        </div>
        <table>
          <thead>
            <tr>
              <th>Operator</th>
              <th>Price</th>
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
    </section>
  );
}

export default CarrierPricing;
