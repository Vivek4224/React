import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Example from './header';
import ExampleSlide from './bodySlider';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Example />
      <ExampleSlide />
    </div>
  )
}

export default App
