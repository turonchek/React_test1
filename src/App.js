import React, {useState} from 'react';
import './App.css';

function App() {
  let [isOpen, SetIsOpen] = useState(false);
  return (
    <div>
      <button onClick = {() => SetIsOpen(!isOpen)}>Click me</button>
      {isOpen && (
        <h1>Hello!</h1>
      )}
    </div>
  );
}

export default App;
