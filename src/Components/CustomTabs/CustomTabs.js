import React from 'react';
import { Paper, Tab, makeStyles, Tabs, Grid } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        margin: '0 auto'
    },
    tab: {
        backgroundColor: 'var(--color-secondary-dark)',
        marginTop: '1rem',
        marginBottom: '1rem'
    }
});

const CustomTabs = (props) => {

    const classes = useStyles();

    return (
        <Grid item xs={12} md={8} className={classes.root} >
            <Paper>
                <Tabs
                    className={classes.tab}
                    value={props.tabValue}
                    onChange={props.handleTabChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="Today" />
                    <Tab label="Total" />
                </Tabs>
            </Paper>
        </Grid>
    );
}

export default CustomTabs;
