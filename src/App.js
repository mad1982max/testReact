import { useState } from "react";
import Popup from "./Popup";
import "./styles.css";

export default function App() {
  const [showPopUp, setShowPopUp] = useState(false);
  const click = () => {
    setShowPopUp(true);
  };

  return (
    <div className="App">
      <button onClick={click}>Push</button>
      {showPopUp && <Popup />}
    </div>
  );
}
