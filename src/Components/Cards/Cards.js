import React, { useEffect, useState } from 'react';
import { fetchData } from '../../API/API';
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

    const [data, setData] = useState({});

    useEffect(() => {
        fetchData().then(response => setData(response));
    }, []);

    return (
        <Grid container className={classes.root} >
            <Card type="infected" response={data} />
            <Card type="recovered" response={data} />
            <Card type="deaths" response={data} />
        </Grid>
    );
}

export default Cards;