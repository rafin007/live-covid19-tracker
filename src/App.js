import React, { useEffect, useState } from 'react';
import Cards from './Components/Cards/Cards';
import { makeStyles, Grid } from '@material-ui/core';
import { fetchData } from './API/API';
import Chart from './Components/Chart/Chart';
import CountryPicker from './Components/CountryPicker/CountryPicker';

const useStyles = makeStyles({

  creditText: {
    textAlign: 'center',
    color: 'var(--color-secondary)',
    margin: '0 auto',
    marginBottom: '1rem'
  },
  countryPicker: {
    margin: '0 auto'
  },
  header: {
    fontWeight: 300,
    textAlign: 'center',
    color: 'var(--color-primary-foreground)',
    marginTop: '2rem',
    letterSpacing: '.3rem',
    textTransform: 'uppercase',
    marginBottom: '1rem',
  },
});

const App = () => {

  const classes = useStyles();

  const [data, setData] = useState({});

  const [country, setCountry] = useState('');

  const handleCountryChanged = async (country) => {

    const fetchedData = await fetchData(country);

    setCountry(country);
    setData(fetchedData);
  }

  useEffect(() => {
    fetchData().then(response => setData(response));
  }, []);

  return (
    <Grid container >
      <Grid item xs={12}>
        <h2 className={classes.header} >Covid-19 tracker</h2>
      </Grid>
      <Grid item xs={8} className={classes.countryPicker} >
        <CountryPicker handleChange={handleCountryChanged} />
      </Grid>
      <Cards data={data} country={country} />
      <Chart handleChange={handleCountryChanged} country={country} data={data} />
      <p className={classes.creditText} >Created by Arefin Mehedi</p>
    </Grid>
  );
}

export default App;
