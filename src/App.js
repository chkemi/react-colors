import React from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';

console.log(generatePalette(seedColors[2]));

function App() {
  return (
    <div>
      <Palette palette={generatePalette(seedColors[4])} />
    </div>
  );
}

export default App;
