import React, { useState } from 'react';
import Table from "./Components/Table/Table";
import Header from "./Components/Header/Header";
import { Container } from 'react-bootstrap';

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  
  return (
    <div className="App">
      <Header />
      <Container >
        <Table />
      </Container>
      
    </div>
  );
}

export default App;
