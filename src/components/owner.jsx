import useStyles from './styles/Home'
import taxiImage from "../assets/taxi.png"
import taxiIllustration from "../assets/CarIllustration.png"
import taxiIllustrationRight from "../assets/TaxiIllustrationRight.png"
import { Button, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from "react"
import { rideShare } from "../api/rideshare"

const Owner = (props) => {

    const [license, setLicense] = useState(null);
    const [vehicle, setVehicle] = useState(null);

    const classes = useStyles();
    return (
            <>            
                <div className={classes.rideInfoDiv}>
                <form className={classes.userForm}>
                        <div className={classes.textFields}>
                            <TextField
                                id='lisencenumber'
                                label="Enter License Number"
                                variant='outlined'
                                name='license'
                                className={classes.textField}
                                onChange={(e) => setLicense(e.target.value)}
                            />
                            <TextField
                                id='vehicleNumber'
                                label="Enter Vehicle Number"
                                variant='outlined'
                                name='vehicle'
                                className={classes.textField}
                                onChange={(e) => setVehicle(e.target.value)}
                            />
                         
                        </div>
                        <input
                            onClick={(event) => {
                                event.preventDefault();
                                
                                props.ApproveDriver(vehicle, license);
                              }}
                            type='button'
                            value="Approve Driver"
                            className={`${classes.connectButton} ${classes.rideButton}`} />
                    </form>
                </div>
         
            </>
        
    )
}

export default Owner