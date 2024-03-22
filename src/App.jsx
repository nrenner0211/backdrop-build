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

export default App;