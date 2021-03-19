import React from "react";
import Application from "./Components/Application"


import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./Json-files/users.json"
import 'font-awesome/css/font-awesome.min.css';

function App() {
  
  
  return (
    <div>
      <Application data={data}/>
    </div>
    
  );
}

export default App;
