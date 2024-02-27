import * as React from 'react';
import { render } from 'react-dom';
import './App.css';
import Hero from './components/Hero';
import Demo from './components/Demo';

const App = () => {
  return (
    <main>
      <div className="app">
        <Hero />
        <Demo />
      </div>
    </main>
  )
}

// render(<App />, document.getElementById('root'));

export default App;