import { useState, useEffect } from 'react'
import './App.css'
import BoxForm from './componenets/boxform/boxform'
import BoxDisplay from './componenets/boxdisplay/boxdisplay'


function App() {
  const [getBoxes, setBoxes] = useState([])

  useEffect(() => {
    console.log(getBoxes)
  }, [getBoxes]);

  const updateBoxState = (box) => {
    setBoxes([...getBoxes, box])
  };

  return (
    <>

    <BoxForm handleBoxFormSubmit={updateBoxState}/>
    <BoxDisplay boxes = {getBoxes}/>

    </>
  )
}

export default App
