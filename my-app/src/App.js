import { useEffect, useState } from "react";
import "./App.css";
import MyMovesItem from "./Components/MyMovesItem";
import Sidebar from "./Components/Sidebar";
import Allroutes from "./AllRoutes/Allroutes";


function App() {
  return (
    <div className="flex h-screen">
      
      <div className="hidden md:block md:mr-24">
      <Sidebar />
      </div>
      <div className="flex flex-col w-full">
        <div className="overflow-auto flex-1 p-4">
          <Allroutes />
        </div>
      </div>
    </div>
  );
}

export default App;
