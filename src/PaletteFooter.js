import React from 'react';

const PaletteFooter = (props) => {
    const { paletteName } = props;

    return ( 
        <footer className='Palette-footer'>
            {paletteName}
        </footer>
     );
}
 
export default PaletteFooter;