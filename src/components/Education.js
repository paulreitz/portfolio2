import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import EducationItem from './educationitem';

import educationData from '../data/educationdata';

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

export default function Education(props) {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <Typography variant="h4" className={classes.title}>Education</Typography>
                </Grid>
                {
                    educationData.map(item => (
                        <Grid item xs={12}>
                            <EducationItem {...item} />
                        </Grid>
                    ))
                }
            </Grid>
        </div>
        
    )
}