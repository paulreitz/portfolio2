import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import WorkItem from './WorkItem';

import workData from '../data/workitemdata';

const useStyles = makeStyles(theme => ({
    container: {
        [theme.breakpoints.up('md')]: {
            width: 960
        },
        width: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    title: {
        textAlign: 'center',
        marginBottom: 15
    }
}))

export default function Work(props) {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h4" className={classes.title}>Work History</Typography>
                </Grid>
                {
                    workData.map(item => (
                        <Grid item xs={12}>
                            <WorkItem {...item} />
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}