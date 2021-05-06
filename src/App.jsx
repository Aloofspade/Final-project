import React, { useState } from 'react';
import HomePage from "./components/Home";
function App() {
const [Home, setHome] = useState(true);
const [Daily, setDaily] = useState(false);
return (
    <div className="App">
    <>
        {Home && <HomePage onClick={() => {setHome(false); setDaily(true)}} />}
    </>
    </div>
);
}

export default App;
