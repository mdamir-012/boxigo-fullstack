import { useEffect, useState } from "react";
import "./App.css";
import MyMovesItem from "./Components/MyMovesItem";
import Sidebar from "./Components/Sidebar";
import Allroutes from "./AllRoutes/Allroutes";


function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1  p-4">
        <div className="flex-1 overflow-auto">
          <Allroutes />
        </div>
      </div>
    </div>
  );
}

export default App;
