import React, { useEffect, useState } from 'react';
import Cards from './Components/Cards/Cards';
import { makeStyles } from '@material-ui/core';
import { fetchData } from './API/API';

const useStyles = makeStyles({
  header: {
    fontWeight: 100,
    textAlign: 'center',
    color: 'var(--color-primary-foreground)',
    marginTop: '1rem',
    letterSpacing: '.3rem',
    textTransform: 'uppercase'
  }
});

const App = () => {

  const classes = useStyles();

  const [data, setData] = useState({});

  useEffect(() => {
    fetchData().then(response => setData(response));
  }, []);

  return (
    <div className={classes.App}>
      <h1 className={classes.header} >Live covid-19 tracker</h1>
      <Cards response={data} />
    </div>
  );
}

export default App;
