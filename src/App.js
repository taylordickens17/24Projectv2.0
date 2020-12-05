import { useState, useEffect } from 'react';
import Weather from './Components/Weather.jsx';
import { Row, Col, Container } from "reactstrap";


function App() {

  return (
    <div className="App">
      <Weather />
    </div>
  );
}

export default App;
