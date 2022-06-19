import React from 'react'
import useStyles from './styles/Home'
import taxiImage from "../assets/taxi.png"

const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.mainContent}>Share Your Ride
            <img src={taxiImage} className={classes.taxiImageStyle} alt="Taxi" />
        </div>
    )
}

export default Home