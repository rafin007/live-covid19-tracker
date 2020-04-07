import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import Cards from './Components/Cards/Cards';
import { makeStyles, Typography } from '@material-ui/core';
import { fetchData } from './API/API';
import Appbar from './Components/Appbar/Appbar';
import Chart from './Components/Chart/Chart';

const useStyles = makeStyles({

  creditText: {
    textAlign: 'center',
    color: 'var(--color-secondary)',
    position: 'absolute',
    top: '92%',
    left: '50%',
    transform: 'translateX(-50%)',
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
      <Appbar />
      <Route path="/chart" component={Chart} />
      <Route path="/" exact component={Cards} />
      <p className={classes.creditText} >Created by Arefin Mehedi</p>
    </div>
  );
}

export default App;
