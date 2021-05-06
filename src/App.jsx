import React, { useState } from "react";
function App() {
const [Home, setHome] = useState(true);
const [Daily, setDaily] = useState(false);
return (
    <div className="App">
    <>
        <div className="App">
        <nav>
            <ul>
              <li
                onClick={() => {
                  setHome(true);
                  setDaily(false);
                }}
              >
                stuff
              </li>
              <li
                onClick={() => {
                  setHome(false);
                  setDaily(true);
                }}
              >
                stuff
              </li>
            </ul>
          </nav>
          {Home && <div className="home">home</div>}
          {Daily && <div className="daily">daily</div>}
        </div>
      </>
    </div>
  );
}

export default App;
