import logo from './logo.svg';
import './App.css';
import React,{ useState } from 'react';
import ColorBlock from './colorBlock.js';

function App() {
  let [colors, setColors] = useState( ['violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red'])

  let colorMap = colors.map((color, i) => {
    return (
      <ColorBlock color={color} />
    )
  })
  return (
    <div className="App">
    {colors.map((color, i) => 
        <ColorBlock key={i} color={color} />
    )}
</div>

  );
  
}




export default App;

//dont know where to add this const addColor = (newColor) => {
  // const addColor = (newColor) => {
  //     setColors([...colors, newColor])
  // }

  // return (
  //     <div className="App">
  //         {colorMap}
  //         <ColorForm addColor={addColor} />
  //     </div>
  // )



