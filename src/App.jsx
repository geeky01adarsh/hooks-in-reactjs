import { useState } from 'react'
import './App.css'
import Counter from './components/Counter.jsx'
import CounterReducer from './components/CounterReducer'
import CustomHook from './components/CustomHook'
import FakeStore from './components/FakeStore'
import KittyGalary from './components/KittyGalary'
import StopWatch from './components/StopWatch'
import Todo from './components/Todo'
import UseContextHook from './components/UseContextHook'
import Hello from './components/Hello'
import './App.css'

const names = ["Adarsh", "ad", "ananya", "dev"]

function App() {
  
  return (
    <>
      <Hello />
      <Hello />
      <Hello />
      <Hello />
      <Hello />

      <FakeStore/>
      <StopWatch/>
      <KittyGalary/>
      <CustomHook/>
      <CounterReducer/>
      <Todo/>
      <Hello />
    </>
  );
}

export default App


{/* <Counter/> */}
      {/* <FakeStore/> */}
      {/* <StopWatch/> */}
      {/* <KittyGalary/> */}
      {/* <CustomHook/> */}
      {/* <CounterReducer/> */}
      {/* <Todo/> */}
      <UseContextHook/>