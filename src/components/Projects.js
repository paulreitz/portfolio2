import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

import ProjectItem from './ProjectItem';
import projectData from '../data/projectdata';

const useStyles = makeStyles(theme => ({
    container: {
            [theme.breakpoints.up('md')]: {
            width: 980
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

export default function Projects(props) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h4" className={classes.title}>Projects</Typography>
                </Grid>
                {
                    projectData.map(item => (
                        <Grid item xs={12} md={4}>
                            <ProjectItem {...item} />
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}