import React, { Component } from 'react';

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='Palette'>
            {/* navbar goes here */}
                <div className='Palette-colors'>
                    {/* bunch of color boxes */}
                </div>
                {/* footer evetually */}
            </div>
         );
    }
}
 
export default Palette;