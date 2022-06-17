import React from 'react'
import useStyles from './styles/Home'

const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.mainContent}>Share Your Ride</div>
    )
}

export default Home