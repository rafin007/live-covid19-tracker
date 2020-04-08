import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Card from './Card/Card';


const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'space-around',
        marginBottom: '3rem'
    }
});

const Cards = (props) => {

    const classes = useStyles();

    return (
        <Grid container className={classes.root} >
            <Card type="infected" response={props.data} country={props.country} />
            <Card type="recovered" response={props.data} country={props.country} />
            <Card type="deaths" response={props.data} country={props.country} />
        </Grid>
    );
}

export default Cards;