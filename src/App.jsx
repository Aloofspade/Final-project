import React, { useState } from 'react';
import HomePage from "./components/HomePage";
function App() {
  const [Home, setHome] = useState(true);
  const [Daily, setDaily] = useState(false);
  const [Hourly, setHourly] = useState(false);
  const [Details, setDetails] = useState(false);
  const toDaily = () => {
    setHome(false);
    setDaily(true);
    setHourly(false);
    setDetails(false);
  }
  return (
    <div className="App">
      <>
        {Home && <HomePage toDaily={toDaily} />}
        {Daily && <div>yes</div>}
      </>
    </div>
  );
}

export default App;
