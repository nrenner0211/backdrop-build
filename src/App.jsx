"use client";
import { Boxes } from "./components/ui/background-boxes";

import './App.css';
import Hero from './components/Hero';
import Demo from './components/Demo';

const App = () => {
  return (
    <main>
      <div className="app">
        <Boxes />
        <Hero />
        <Demo />
      </div>
    </main>
  )
}

export default App;