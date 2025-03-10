import React, { useState } from "react";
import { CountryDropdown } from "react-country-region-selector";

function CountryRegionSelector() {
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  const handleCountryChange = (val) => {
    setCountry(val);
    setRegion(""); // Reset region when country changes
  };

  const handleRegionChange = (val) => {
    setRegion(val);
  };

  return (
    <div>
      <CountryDropdown value={country} onChange={handleCountryChange} />
    </div>
  );
}

export default CountryRegionSelector;
