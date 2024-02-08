import './App.css';
import Home from './pages/home/Home';
import { Provider } from 'react';
import { createStore } from 'redux';

function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
