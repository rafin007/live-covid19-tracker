import React, { useEffect, useState } from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import { NovelCovid } from 'novelcovid';

import Cards from './Components/Cards/Cards';
import Chart from './Components/Chart/Chart';
import CountryPicker from './Components/CountryPicker/CountryPicker';
import CustomTabs from './Components/CustomTabs/CustomTabs';

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

  //country
  const [country, setCountry] = useState('');

  const handleCountryChanged = async (country) => {
    setCountry(country);
  }

  //tabs
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const track = new NovelCovid();

  useEffect(() => {
    if (country) {
      track.countries(country).then(response => {
        setData(response);
      });
    }
    else {
      track.all().then(response => {
        setData(response);
      });
    }
  }, [country]);

  const [modifiedData, setModifiedData] = useState({});

  useEffect(() => {
    if (tabValue === 0) {
      setModifiedData({
        cases: data.todayCases,
        deaths: data.todayDeaths,
        updated: data.updated,
        recovered: 0
      });

    }
    else {
      setModifiedData({
        cases: data.cases,
        deaths: data.deaths,
        updated: data.updated,
        recovered: data.recovered
      });
    }
  }, [tabValue, data]);

  return (
    <Grid container >
      <Grid item xs={12}>
        <h2 className={classes.header} >Covid-19 tracker</h2>
      </Grid>
      <Grid item xs={8} className={classes.countryPicker} >
        <CountryPicker handleChange={handleCountryChanged} />
      </Grid>
      <CustomTabs handleTabChange={handleTabChange} tabValue={tabValue} />
      <Cards data={modifiedData} country={country} tabValue={tabValue} />
      <Chart handleChange={handleCountryChanged} country={country} data={modifiedData} />
      <p className={classes.creditText} >Created by Arefin Mehedi</p>
    </Grid>
  );
}

export default App;
