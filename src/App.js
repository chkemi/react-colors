import React from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';

console.log(generatePalette(seedColors[2]));

function App() {
  return (
    <div>
      <Palette {...seedColors[2]}/>
    </div>
  );
}

export default App;
