import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchDailyData } from '../../API/API';
import { Line, Bar } from 'react-chartjs-2';

const Chart = ({ data: { cases, recovered, deaths }, country }) => {

    //cases
    //deaths
    //recovered
    //updated
    //country

    const useStyles = makeStyles({
        chartContainer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: '2rem'
        },
        chart: {
            height: country ? '' : '35rem'
        }
    });

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

        }} options={{
            responsive: true,
            title: { text: 'Covid-19 chart', display: true },
            maintainAspectRatio: false,
            scales: {
                xAxes: [
                    {
                        gridLines: {
                            display: false
                        }
                    }
                ]
            }
        }} />
    );

    const barChart = (
        cases &&
        <Bar data={{
            labels: ['Infected', 'Recovered', 'Deaths'],
            datasets: [{
                label: 'People',
                backgroundColor: [
                    'rgba(0, 0, 255, 0.5)',
                    'rgba(0, 255, 0, 0.5)',
                    'rgba(255, 0, 0, 0.5)',
                ],
                data: [cases, recovered, deaths]
            }]
        }} options={{
            legend: { display: false },
            title: {
                display: true,
                text: `Current state in ${country}`
            }
        }} />
    );

    return (
        <Grid container className={classes.chartContainer} >
            <Grid item xs={12} md={10} className={classes.chart} >
                {country ? barChart : lineChart}
            </Grid>
        </Grid>
    );
}

export default Chart;
