import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/styles';

import FullTimeIcon from '@material-ui/icons/AssignmentInd';
import ContractIcon from '@material-ui/icons/Assignment';

const useStyles = makeStyles(theme => ({
    container: {
        marginBottom: 24,
        paddingBottom: 10,
        borderBottom: '1px solid black'
    },
    jobtitle: {
        marginTop: 10
    }
}))

export default (props) => {
    const classes = useStyles();


    return (
        <Grid container className={classes.container}>
            <Grid item xs={6}>
                <Typography variant="h5">{props.company}</Typography>
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}>
                {
                    props.contract
                        ? <Tooltip title="Contract"><ContractIcon /></Tooltip>
                        : null
                }
                {
                    props.fulltime
                        ? <Tooltip title="Full Time"><FullTimeIcon /></Tooltip> 
                        : null
                }
            </Grid>
            <Grid item xs={12}>
                <Typography variant="caption">{props.from} - {props.to}</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1" className={classes.jobtitle}>{props.title}</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body2">{props.tech}</Typography>
            </Grid>
        </Grid>
    )
}