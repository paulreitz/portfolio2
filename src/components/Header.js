import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import ComputerIcon from '@material-ui/icons/Computer';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });
    
    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const largeHeader = 163;
const screenBreakPoint = 'lg';

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        [theme.breakpoints.up(screenBreakPoint)]: {
            minHeight: largeHeader
        }
    },
    headerBar: {
        [theme.breakpoints.up(screenBreakPoint)]: {
            minHeight: largeHeader
        },
        backgroundColor: '#202080'
    },
    content: {
        [theme.breakpoints.up(screenBreakPoint)]: {
            flexGrow: 1,
            flexDirection: 'inherit',
            padding: 0,
            justifyContent: 'space-between'
        }
    },
    title: {
        [theme.breakpoints.up(screenBreakPoint)]: {
            paddingTop: 15,
            fontWeight: 700,
            letterSpacing: '0.05em',
            fontSize: '3rem'
        },
        textDecoration: 'none'
    },
    subtitle: {
        paddingBottom: 10,
        color: theme.palette.common.offWhite
    },
    tabs: {
        backgroundColor: theme.palette.common.darkerBlue,
        marginBottom: 0,
        width: '100%'
    },
    menuIconContainer: {
        marginLeft: 'auto'
    },
    menuIcon: {
        color: theme.palette.common.offWhite
    },
    drawerPaper: {
        backgroundColor: 'white',
        width: 200
    }
}))

export default function Header(props) {
    const classes = useStyles();
    const theme = useTheme();
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const matchesLarge = useMediaQuery(theme.breakpoints.up(screenBreakPoint));

    const [value, setValue] = useState(0);

    const [openDrawer, setOpenDrawer] = useState(false);

    const handleChange = (e, val) => {
        setValue(val);
    }

    const routes = [
        {name: 'Home', link: '/', activeIndex: 0, icon: <HomeIcon/>},
        {name: 'Projects', link: '/projects', activeIndex: 1, icon: <ComputerIcon/>},
        {name: 'Work History', link: '/work', activeIndex: 2, icon: <WorkIcon/>},
        {name: 'Education', link: '/education', activeIndex: 3, icon: <SchoolIcon/>}
    ]

    const currentRoute = routes.find(route => window.location.pathname === route.link);
    const currentIndex = currentRoute? currentRoute.activeIndex : -1
    if (!isNaN(currentIndex) && currentIndex !== value) {
        setValue(currentIndex);
    }

    const tabs = (
        <Tabs className={classes.tabs} value={value} onChange={handleChange} indicatorColor="primary" centered>
            {routes.map((route) => (
                <Tab key={route.link} component={Link} to={route.link} label={route.name} disableRipple />
            ))}
        </Tabs>
    );

    const drawer = (
        <React.Fragment>
            <SwipeableDrawer
                disableBackdropTransition={!iOS} 
                disableDiscovery={iOS}
                open={openDrawer} 
                onClose={() => {setOpenDrawer(false)}}
                onOpen={() => {setOpenDrawer(true)}}
                classes={{
                    paper: classes.drawerPaper
                }} 
            >
                <div>
                    <List disablePadding>
                        {routes.map((route) => (
                            <ListItem 
                                key={route.link} 
                                onClick={() => {setOpenDrawer(false); setValue(route.activeIndex)}} 
                                divider 
                                button 
                                component={Link} 
                                to={route.link} 
                                selected={value === route.activeIndex} 
                            >
                                <ListItemIcon>{route.icon}</ListItemIcon>
                                <ListItemText>{route.name}</ListItemText>
                            </ListItem>
                        ))}
                    </List>
                </div>
            </SwipeableDrawer>
            <IconButton className={classes.menuIconContainer} onClick={() => {setOpenDrawer(!openDrawer)}} disableRipple>
                <MenuIcon className={classes.menuIcon} />
            </IconButton>
        </React.Fragment>
    )

    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position="fixed" className={classes.headerBar}>
                    <Toolbar className={classes.content}>
                        <Typography variant="h4" color="secondary" className={classes.title} component={Link} to="/" onClick={() => {setOpenDrawer(false); setValue(0)}}>Paul Reitz</Typography>
                        {
                            matchesLarge 
                                ? (<Typography className={classes.subtitle} variant="subtitle1">Showing Off - A Portfolio of Work I've Done</Typography>)
                                : null
                        }
                        { matchesLarge ? tabs : drawer }
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}/>
        </React.Fragment>
    )
};