
import { useState } from 'react'
import './App.css'
import CardSection from './Components/CardSection/CardSection'
import Hero from './Components/Navbar/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Primium from './Components/Primium/Primium'
import Ratting from './Components/Ratting/Ratting'
import SelectedCard from './Components/CardSection/selectedCard/SelectedCard'

function App() {
  const [number, setNumber] = useState(0)
  const [active, setActive] = useState("Products")
  console.log(active);
  const [carts, setCarts] = useState([]);
  console.log(carts);
  
  
  const [data, setData] = useState([])

  return (
    <>
      <Navbar number={number}/>
      <Hero/>
      <Ratting/>


      <Primium setActive={setActive} number={number}/>



      { active === "Products" ? <CardSection setNumber={setNumber} number={number} active={active} data={data} carts={carts} setCarts={setCarts} setData={setData}/>: null } 
      
      {active === "cart" ? <SelectedCard/> : null}
    </>
  )
}

export default App
