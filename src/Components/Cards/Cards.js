import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Card from './Card/Card';


const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'space-around',
    }
});

const Cards = (props) => {

    const classes = useStyles();

    return (
        <Grid container className={classes.root} >
            <Card type="infected" response={props.response} />
            <Card type="recovered" response={props.response} />
            <Card type="deaths" response={props.response} />

        </Grid>
    );
}

export default Cards;