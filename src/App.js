import { useState, useEffect } from 'react';
import Weather from './Components/Weather.jsx';
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';


function App() {

  return (
    <div className="App">
    <main>
        <InputGroup>
          <Input placeholder="Enter Zip Code" />
          <InputGroupAddon addonType="append"><Button>Search</Button></InputGroupAddon>
        </InputGroup>
      </main>
    </div>
  );
}

export default App;
