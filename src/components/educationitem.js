import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    container: {
        marginBottom: 24,
        paddingBottom: 10,
        borderBottom: '1px solid black'
    },
    header: {
        marginBottom: 5
    },
    rightText: {
        [theme.breakpoints.up('sm')]: {
            paddingTop: 10,
            textAlign: 'right'
        },
        paddingTop: 2
    },
    degree: {
        [theme.breakpoints.up('sm')]: {
            paddingTop: 10,
        },
        paddingTop: 2
    }
}))

export default (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMedium = useMediaQuery(theme.breakpoints.up('md'));

    const smallHeader = (
        <Grid container justify="space-between" className={classes.header}>
            <Grid item xs={12} sm={6}>
                <Typography variant="h6">{props.school}</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="body2" className={classes.rightText}>{props.location}</Typography>
            </Grid>
            <Grid itme xs={12} sm={6}>
                <Typography variant="caption">{props.from} - {props.to}</Typography>
            </Grid>
        </Grid>
    );

    const medHeader = (
        <Grid container justify="space-between" className={classes.header}>
            <Grid item md={6}>
                <Typography variant="h6">{props.school}</Typography>
            </Grid>
            <Grid item md={6} className={classes.rightText}>
                <Typography variant="caption">{props.from} - {props.to}</Typography>
            </Grid>
            <Grid item md={12}>
                <Typography variant="body2">{props.location}</Typography>
            </Grid>
        </Grid>
    )

    return (
        <Grid container className={classes.container}>
            <Grid item xs={12}>
                {
                    matchesMedium 
                    ? medHeader
                    : smallHeader
                }
            </Grid>
            <Grid item xs={12}>
                <Grid container>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body1" className={classes.degree}>{props.degree}:</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.rightText}>
                        <Typography variant="body2">{props.name}</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        
    )
}