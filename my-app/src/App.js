import { useEffect, useState } from "react";
import "./App.css";
import MyMovesItem from "./Components/MyMovesItem";
import Sidebar from "./Components/Sidebar";
import Allroutes from "./AllRoutes/Allroutes";

function App() {
  

  return (
    <div className="container mx-auto p-4">
      <Allroutes />
      <Sidebar />
    </div>
  );
}

export default App;
