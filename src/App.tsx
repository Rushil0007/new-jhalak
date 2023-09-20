import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StudentForm from "./components/Form";
import CongratulatoryTile from "./components/CongratulatoryTile"; // Import the CongratulatoryTile component
// import "./App.css";
// import "./src/fonts/Amador-W01-Regular.ttf";



function App() {
  // You can manage the houseName state here and pass it to the CongratulatoryTile component
  const [houseName, setHouseName] = useState<string | undefined>(undefined);

  // Callback to set the houseName when needed
  const handleShowCongratulatoryTile = (name: string) => {
    setHouseName(name);
  };

  return (
    <div className="App">
      <Navbar />
      <Hero />
      {/* <Img /> */}
      <div>
        <StudentForm houseName={houseName} />
        {/* CongratulatoryTile component */}
        {houseName && <CongratulatoryTile houseName={houseName} />}
      </div>
    </div>
  );
}

export default App;