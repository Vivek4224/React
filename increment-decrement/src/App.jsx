import { useState } from "react";
import FunCom from "./incre-decre";
import UseStateCom from "./incre-decre";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="appContainer">
      <UseStateCom />
    </div>
  );
}

export default App;
