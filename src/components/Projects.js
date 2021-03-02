import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
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
    },
    description: {
        padding: 15
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
                <Grid item xs={12}>
                    <Box className={classes.description}>
                        <Typography variant="body2">
                            These are projects I created either to fill a need I had, or to explore some concept in a simple context. 
                            Due to the costs involved, if the project requires a database then there is no live example of the project.
                        </Typography>
                    </Box>
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