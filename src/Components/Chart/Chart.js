import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchDailyData } from '../../API/API';
import { Line, Bar } from 'react-chartjs-2';
import CountryPicker from '../CountryPicker/CountryPicker';


const useStyles = makeStyles({
    chartContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    }
});

const Chart = () => {

    const classes = useStyles();

    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        fetchDailyData().then(response => {
            setDailyData(response);
        });
    }, []);

    const lineChart = (
        dailyData.length &&
        <Line data={{
            labels: dailyData.map(({ date }) => date),
            datasets: [{
                data: dailyData.map(({ confirmed }) => confirmed),
                label: 'Infected',
                borderColor: '#3333ff',
                fill: true
            }, {
                data: dailyData.map(({ deaths }) => deaths),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0, 0, 0.1)',
                fill: true
            }],

        }} />
    );

    return (
        <Grid container className={classes.chartContainer} >
            <Grid item xs={10} >
                <CountryPicker />
            </Grid>
            <Grid item xs={12} md={10} >
                {lineChart}
            </Grid>
        </Grid>
    );
}

export default Chart;
