import useStyles from './styles/Home'
import taxiImage from "../assets/taxi.png"
import taxiIllustration from "../assets/CarIllustration.png"
import taxiIllustrationRight from "../assets/TaxiIllustrationRight.png"
import { Button, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from "react"
import { rideShare } from "../api/rideshare"

const Home = (props) => {

    const [balance, setBalance] = useState(null)

  

    const getBalance=async()=>{
       
        
    }

    const classes = useStyles();
    return (
        <div className={classes.mainContent}>
            <Button 
            variant='contained' 
            onClick={props.connectWallet}
            className={classes.connectButton}>
                                {props.account==null?<>Connect Wallet</>:<>Wallet Connected</>}
            </Button>
            <Typography className={classes.addressText}>
                Address:
                {props.account==null?<>Wallet not Connected</>:<>{props.account}</>}
            </Typography>
            <Typography className={classes.addressText}>
                Balance:{getBalance}
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
                            onClick={props.findRide}
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