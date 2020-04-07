import React from 'react';
import { NavLink } from 'react-router-dom'
import { AppBar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    appbar: {
        height: '4rem',
        backgroundColor: '#546e7a',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 1rem',
        fontSize: '1rem',
        letterSpacing: '.1rem',
        marginBottom: '2rem'
    },
    link: {
        marginRight: '1rem',
        textDecoration: 'none',
        color: 'var(--color-primary-foreground)',
        '&:active': {
            outline: 'none',
            border: 'none'
        },
        fontSize: '1.2rem',
    },
    activeLink: {
        color: '#fff'
    },
    header: {
        fontWeight: 300,
        // textAlign: 'center',
        // color: 'var(--color-primary-foreground)',
        // marginTop: '1rem',
        // letterSpacing: '.3rem',
        textTransform: 'uppercase',
        // padding: '.2rem'
    },
});

const Appbar = () => {

    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.appbar} >
            <h3 className={classes.header} >Covid-19 tracker</h3>
            <div >
                <NavLink to="/" exact className={classes.link} activeClassName={classes.activeLink} >Summary</NavLink>
                <NavLink to="/chart" className={classes.link} activeClassName={classes.activeLink} >Chart</NavLink>
            </div>
        </AppBar>
    );
}

export default Appbar;
