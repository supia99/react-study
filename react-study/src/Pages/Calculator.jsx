import { useState } from "react";
import BoilingVerdict from "../Components/BoilingVerdict";

// class Calculator extends React.Component {
function Calculator() {
  const [temperature, setTemperature] = useState(0);
  // const handleTemperature = () => {
  //   setTemperature(e.target.value);
  // };

  return (
    <fieldset>
      <legend>Enter temperature in Celsius:</legend>
      <input
        value={temperature}
        onChange={(e) => {
          setTemperature(e.target.value);
        }}
      />
      <BoilingVerdict celsius={parseFloat(temperature)} />
    </fieldset>
  );
}

export default Calculator;
