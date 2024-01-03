import { useState } from 'react';
import './App.css';
import Header from './header/header';
import Body from './Body/Body';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Body />
    </div>
  )
}

export default App
