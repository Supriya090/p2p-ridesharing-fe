import useStyles from './styles/Home'
import taxiImage from "../assets/taxi.png"
import taxiIllustration from "../assets/CarIllustration.png"
import taxiIllustrationRight from "../assets/TaxiIllustrationRight.png"
import { Button, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from "react"
import { rideShare } from "../api/rideshare"

const Rider = (props) => {
    const [lat,setLat] = useState(null)
    const [source,setSource] = useState([])
    const [dest,setDest] = useState([])
    const [amount, setAmount] = useState(null)


    const classes = useStyles();
    return (
            <>            
                <div className={classes.rideInfoDiv}>
                    <form className={classes.userForm}>
                        <div className={classes.textFields}>
                        <Typography>Enter Pickup Location</Typography>

                        <div className={classes.side_by_side}>
                        <TextField
                                id='pickupLat'
                                label="Lat"
                                variant='outlined'
                                name='latitude'
                                className={classes.textField}
                                onChange={(e) => setLat(e.target.value)}
                            />
                        <TextField
                                id='long'
                                label="Long"
                                variant='outlined'
                                name='longitude'
                                className={classes.textField}
                                onChange={(e) => setSource([lat,e.target.value])}
                            />
                        </div>
                        <Typography>Enter Drop off Location</Typography>    
                        <div className={classes.side_by_side}>
                        <TextField
                                id='pickupLat'
                                label="Lat"
                                variant='outlined'
                                name='latitude'
                                className={classes.textField}
                                onChange={(e) => setLat(e.target.value)}
                            />
                        <TextField
                                id='long'
                                label="Long"
                                variant='outlined'
                                name='longitude'
                                className={classes.textField}
                                onChange={(e) => setDest([lat,e.target.value])}
                            />
                        </div>
                             <TextField
                                id='amount'
                                label="Enter Amount For Ride"
                                variant='outlined'
                                name='amount'
                                className={classes.textField}
                                onChange={(e) => setAmount(e.target.value)}
                            />
                        </div>
                        <input
                            onClick={(event) => {
                                event.preventDefault();
                                console.log(source, dest, amount)
                                props.findRide(source, dest, amount);
                              }}
                            type='button'
                            value="Find a Ride"
                            className={`${classes.connectButton} ${classes.rideButton}`} />
                    </form>
                </div>
   
            </>
        
    )
}

export default Rider