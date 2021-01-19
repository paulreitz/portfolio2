import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import GithubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Web';
import Lightbox from "react-awesome-lightbox";

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {

    },
    media: {
        height: 0,
        paddingTop: '56.25%',
        cursor: 'pointer'
    },
    description: {
        [theme.breakpoints.up('sm')]: {
            minHeight: 140
        }
    },
    actions: {
        [theme.breakpoints.up('sm')]: {
            minHeight: 52
        }
    },
    button: {
        [theme.breakpoints.up('sm')]: {
            fontSize: '.7rem'
        }
    }
}))

export default (props) => {
    const classes = useStyles();
    const images = props.images.map(image => ({title: props.name, url: `images/${image}`}));
    const [ openLightbox, setOpenLightbox ] = useState(false);
    return (
        <Card>
            <CardHeader title={props.title} />
            <CardMedia className={classes.media} image={`images/thumbnails/${props.thumbnail}`} onClick={() => { setOpenLightbox(true); }} />
            <CardContent className={classes.description}>
                <Typography variant="body2">{props.why}</Typography>
            </CardContent>
            <CardActions classes={classes.actions}>
                {
                    props.link
                        ? (<Button 
                                className={classes.button} 
                                variant="contained" 
                                color="primary" 
                                href={props.link} 
                                target="_blank"
                                startIcon={<WebIcon/>}
                            >View</Button>)
                        : null
                }
                {
                    props.github
                        ? props.github.map(item => (
                            <Button 
                                className={classes.button} 
                                variant="contained" 
                                color="primary" 
                                href={item.link} 
                                target="_blank" 
                                startIcon={<GithubIcon />}
                                >{item.label || "Source"}</Button>
                        ))
                        : null
                }
            </CardActions>
            {
                openLightbox
                    ? <Lightbox 
                        images={images} 
                        allowRotate={false}
                        allowZoon={false} 
                        onClose={() => { setOpenLightbox(false); }} />
                    : null
            }
        </Card>
    )
}