import React, { useState } from "react";

function CountryDropdown() {
  const [selectedCountry, setSelectedCountry] = useState("");

  const countries = [
    { code: "US", name: "United States" },
    { code: "CA", name: "Canada" },
    { code: "GB", name: "United Kingdom" },
    { code: "AU", name: "Australia" },
    // Add more countries as needed
  ];

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <select value={selectedCountry} required onChange={handleChange}>
      <option value="">Select a country</option>
      {countries.map((country) => (
        <option key={country.code} value={country.code}>
          {country.name}
        </option>
      ))}
    </select>
  );
}

export default CountryDropdown;
