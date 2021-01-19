import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/styles';
import SchoolIcon from '@material-ui/icons/School';
import ClockIcon from '@material-ui/icons/WatchLater';
import CallSplit from '@material-ui/icons/CallSplit';

import homeData from '../data/homedata';

const useStyles = makeStyles(theme => ({
    container: {
        [theme.breakpoints.up('md')]: {
            width: 980,
            paddingTop: 36
        },
        width: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: 15
    },
    smallBlock: {
        marginBottom: 24,
        paddingBottom: 5,
        borderBottom: '1px solid #000'
    },
    icon: {
        [theme.breakpoints.up('md')]: {
            width: 150,
            height: 150
        },
        [theme.breakpoints.down('md')]: {
            marginRight: 10,
            lineHeight: 5
        }
    },
    titleMed: {
        paddingTop: 20
    },
    left: {
        textAlign: 'left'
    },
    right: {
        textAlign: 'right'
    }
}));

export default function Home(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMedium = useMediaQuery(theme.breakpoints.up('md'));

    const icons = [
        (<ClockIcon className={classes.icon} color="primary" />),
        (<CallSplit className={classes.icon} color="primary" />),
        (<SchoolIcon className={classes.icon} color="primary" />),
    ]

    const infoIcon = (index) => {
        return (
            <Grid item xs={2}>
                {icons[index]}
            </Grid>
        )
    }

    const infoType = (data, left) => {
        return (
            <Grid item xs={10}>
                <Grid container className={left? classes.left : classes.right}>
                    <Grid item xs={12}>
                        <Typography variant="h5" className={classes.titleMed}>{data.title}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1">{data.description}</Typography>
                    </Grid>
                </Grid>
            </Grid>
        )
    }

    const infoBlock = (data, index) => {
        const left = index % 2 === 0;
        return (
            <Grid container justify={left? 'flex-start' : 'flex-end'}>
                {
                    left
                    ? [infoIcon(index),infoType(data, left)]
                    : [infoType(data, left),infoIcon(index)]
                }
            </Grid>
        )
    };

    const infoBlockSmall = (data, index) => {
        return (
            <Grid container className={classes.smallBlock}>
                <Grid item xs={12}>
                    <Typography variant="h5">{icons[index]}{data.title}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1">{data.description}</Typography>
                </Grid>
            </Grid>
        )
    }

    return (
        <div className={classes.container}>
            <Grid container>
                {
                    homeData.map((item, i) => (
                        <Grid item xs={12}>
                            {
                                matchesMedium
                                    ? infoBlock(item, i)
                                    : infoBlockSmall(item, i)
                            }
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}