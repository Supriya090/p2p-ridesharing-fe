import React from 'react'
import useStyles from './styles/Home'
import taxiImage from "../assets/taxi.png"
import taxiIllustration from "../assets/CarIllustration.png"
import taxiIllustrationRight from "../assets/TaxiIllustrationRight.png"
import { Button, TextField, Typography } from '@material-ui/core';

const Home = () => {
    const classes = useStyles();
    return (  
        <div>
            <Button variant='contained' className={classes.connectButton}>Connect Wallet</Button>
            <Typography className={classes.addressText}>
                Address:
            </Typography>
            <Typography className={classes.addressText}>
                Balance:
            </Typography>
            <Typography className={classes.titleText}>RideSaathi</Typography>
            <img src={taxiImage} className={classes.taxiImageStyle} alt="TaxiImage" />
            <div className={classes.rideGraphicsDiv}>
                <img src={taxiIllustrationRight} className={classes.taxiIllustrationStyle} alt="TaxiIllustration" />
                <div className={classes.rideInfoDiv}>
                    <form className={classes.userForm}>
                        <div className={classes.textFields}>
                            <TextField
                                id='pickupLocation'
                                label="Enter Pickup Location"
                                variant='outlined'
                                name='pickupLocation'
                                className={classes.textField}
                            />
                            <TextField
                                id='dropoffLocation'
                                label="Enter Drop Off Location"
                                variant='outlined'
                                name='dropoffLocation'
                                className={classes.textField}
                            />
                        </div>
                        <input
                            type='button'
                            value="Find a Ride"
                            className={`${classes.connectButton} ${classes.rideButton}`} />
                    </form>
                </div>
                <Typography className={classes.quoteText}>Easing Lives One Ride at a Time</Typography>
            </div>
        </div>
    )
}

export default Home