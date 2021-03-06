import React from 'react';
import { Grid, CardContent, makeStyles } from '@material-ui/core';
import Counter from 'react-countup';

const Card = (props) => {

    const useStyles = makeStyles({
        card: {
            backgroundColor: 'var(--color-secondary-dark)',
            textAlign: 'center',
            marginTop: '1.5rem',
            textTransform: 'uppercase',
            letterSpacing: '.1rem',
            color: 'var(--color-primary-foreground)'
        },
        cardHeader: {
            fontWeight: 300,
            marginBottom: '.5rem',
            fontSize: '1.8rem',
        },
        counter: {
            fontWeight: 400,
            marginBottom: '.5rem',

        },
        date: {
            fontWeight: 300,
            marginBottom: '.5rem',

        },
        description: {
            fontWeight: 300,
        },
        cardInfected: {
            borderBottom: '1rem solid rgba(0, 0, 255, 0.5)',
        },
        cardRecovered: {
            borderBottom: '1rem solid rgba(0, 255, 0, 0.5)',
        },
        cardDeaths: {
            borderBottom: '1rem solid rgba(255, 0, 0, 0.5)'
        }
    });

    const classes = useStyles();

    const classList = [classes.card];
    let description = '';
    let number = 0;

    if (!props.response) {
        return 'loading...';
    }

    if (props.type === 'infected') {
        classList.push(classes.cardInfected);
        description = 'Number of active cases of COVID-19';
        number = <Counter start={0} end={props.response.cases ? props.response.cases : 0} duration={2} separator="," />
    }
    else if (props.type === 'recovered') {
        classList.push(classes.cardRecovered);
        description = 'Number of recoveries from COVID-19';
        number = <Counter start={0} end={props.response.recovered ? props.response.recovered : 0} duration={2} separator="," />

    }
    else {
        classList.push(classes.cardDeaths);
        description = 'Number of deaths caused by COVID-19';
        number = <Counter start={0} end={props.response.deaths ? props.response.deaths : 0} duration={2} separator="," />
    }

    return (
        <Grid item xs={12} md={3} >
            <CardContent className={classList.join(' ')} >
                <h1 className={classes.cardHeader} >
                    {props.tabValue === 0 ? 'Today' : 'Total'} {props.type}
                </h1>
                <h2 className={classes.counter} >
                    {number}
                </h2>
                <h3 className={classes.date} >
                    {new Date(props.response.updated).toDateString()}
                </h3>
                <h4 className={classes.description} >
                    {props.country ? `${description} in ${props.country}` : `${description} globally`}
                </h4>
            </CardContent>
        </Grid>
    )
}

export default Card;
