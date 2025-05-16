import { useState } from 'react'
import './App.css'
import Counter from './count'
import PickColor from './colorpicker'
import FavCar from './StateWithObject'
import StateList from './statelist'
import ToDoList from './todo'
import Watch from './clock'

function App() {
 
  return (
    <>
     {/* <Counter />
      <PickColor />
      <FavCar /> 
      <StateList />
      <ToDoList />*/}

      <Watch />

    </>
  );
}

export default App
