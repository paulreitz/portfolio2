import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    container: {
        [theme.breakpoints.up('md')]: {
            paddingTop: 36,
            width: 980
        },
        paddingTop: 15,
        width: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    title: {
        fontWeight: 700,
        textAlign: 'center'
    },
    copy: {
        textAlign: 'center'
    }
}))

export default function NotFound(props) {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography className={classes.title} variant="h1" color="primary">404</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography className={classes.copy} variant="body1">
                        What you are looking for could not be found.
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}