import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import PaletteMetaForm from './PaletteMetaForm';
import styles from './styles/PaletteFormNavStyles';

class PaletteFormNav extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            newPaletteName: '',
            formShowing: false,
         }

        this.handleChange = this.handleChange.bind(this);
        this.showForm = this.showForm.bind(this);
        this.hideForm = this.hideForm.bind(this);
    }

    handleChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    showForm() {
      this.setState({
        formShowing: true
      })
    }

    hideForm() {
      this.setState({
        formShowing: false
      })
    }

    render() { 
        const { classes, open, palettes, handleSubmit, handleDrawerOpen } = this.props;
        const { formShowing } = this.state;

        return ( 
            <div classname={classes.root}>
                <CssBaseline />
              <AppBar
                position="fixed"
                color='default'
                className={classNames(classes.appBar, {
                  [classes.appBarShift]: open,
                })}
              >
              <Toolbar disableGutters={!open}>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={handleDrawerOpen}
                  className={classNames(classes.menuButton, open && classes.hide)}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" noWrap>
                  Create A Palette
                </Typography>
              </Toolbar>
              <div className={classes.navBtns}>
                <Link to='/'>
                  <Button variant='contained' color='secondary' className={classes.button}>Go Back</Button>
                </Link>
                <Button variant="contained" color="primary" onClick={this.showForm} className={classes.button}>
                  Save
                </Button>
                </div>
              </AppBar>
            {formShowing ? <PaletteMetaForm palettes={palettes} handleSubmit={handleSubmit} hideForm={this.hideForm} /> : null}
            </div>
         );
    }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);