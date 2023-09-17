// App.tsx
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StudentForm from "./components/Form";
import CongratulatoryTile from "./components/CongratulatoryTile"; // Import CongratulatoryTile

import "./MainApp.css";

function App() {
  const [houseName, setHouseName] = useState<string>("");

  return (
    <div className="main-div">
      <Navbar />
      <Hero />
      <div>
        <StudentForm setHouseName={setHouseName} />
        {houseName && <CongratulatoryTile houseName={houseName} />}
      </div>
    </div>
  );
}

export default App;
