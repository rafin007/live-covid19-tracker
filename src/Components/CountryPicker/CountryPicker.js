import React from 'react';
import { makeStyles, FormControl, Select, InputLabel, MenuItem } from '@material-ui/core';
import { useEffect } from 'react';
import { useState } from 'react';
import { fetchCountries } from '../../API/API';

const useStyles = makeStyles({
    dropDown: {
        width: '100%',
        margin: '0 auto',
        marginBottom: '2rem',
    },
    label: {
        color: 'var(--color-primary-foreground)',
        '&:active': {
            color: 'var(--color-primary-foreground)',
        }
    },
    select: {
        color: 'var(--color-primary-foreground)'
    }
});

const CountryPicker = () => {

    const [countries, setCountries] = useState([]);

    const classes = useStyles();

    useEffect(() => {
        fetchCountries().then(response => {
            setCountries(response);
        })
    }, [setCountries]);

    return (
        <FormControl className={classes.dropDown} >
            <InputLabel id="demo-simple-select-label" className={classes.label}  >Select Country</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                className={classes.select}
            >
                <MenuItem value="global" >Global</MenuItem>
                {countries.map(country => <MenuItem value={country} key={country} >{country}</MenuItem>)}
            </Select>
        </FormControl>
    );
}

export default CountryPicker;
