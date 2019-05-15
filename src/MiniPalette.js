import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/MiniPaletteStyles';
import DeleteIcon from '@material-ui/icons/Delete';

const MiniPalette = (props) => {
    const { classes, paletteName, colors } = props;
    const miniColorBoxes = colors.map(color => (
        <div 
            className={classes.miniColor} 
            style={{backgroundColor: color.color}}
            key={color.name}
        />
    ))

    return ( 
        <div className={classes.root} onClick={props.handleClick}>
            <div className={classes.delete}>
                <DeleteIcon className={classes.deleteIcon} style={{transition: 'all 0.3s ease-in-out'}} />
            </div>
            <div className={classes.colors}>
                {miniColorBoxes}
            </div>
            <h5 className={classes.title}>{paletteName}</h5>
        </div>
    );
}
 
export default withStyles(styles)(MiniPalette);