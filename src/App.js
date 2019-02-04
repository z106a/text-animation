import React from 'react';
import './App.css';
import { AnimatedText } from './AnimatedText';

function App() {
    return (
      <div className="App">
        <AnimatedText
          textColor="#cd122d"
          overlayColor="#fdc52c"
        >
          TEXT EXAMPLE
        </AnimatedText>
      </div>
    );
}

export default App;
