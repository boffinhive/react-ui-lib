import React from "react";
import { MyButton } from "./components/MyButton";
import "primeicons/primeicons.css";
import "./index.css";

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold">PrimeReact UI Library Demo</h1>
        <div className="flex justify-center items-center gap-2">
          <MyButton
            label="Click Me"
            icon="pi pi-check"
            onClick={() => alert("Clicked!")}
          />
          <MyButton
            label="Test"
            severity="danger"
            className="bg-green-500 hover:bg-green-700"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
