
import { useState } from 'react'
import './App.css'
import CardSection from './Components/CardSection/CardSection'
import Hero from './Components/Navbar/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Primium from './Components/Primium/Primium'
import Ratting from './Components/Ratting/Ratting'

function App() {
  const [number, setNumber] = useState(0)

  return (
    <>
      <Navbar number={number}/>
      <Hero/>
      <Ratting/>
      <Primium/>
      <CardSection setNumber={setNumber} number={number}/>
    </>
  )
}

export default App
