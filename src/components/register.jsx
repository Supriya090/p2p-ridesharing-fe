import useStyles from './styles/Home'
import { TextField } from '@material-ui/core';
import React, { useState } from "react"

const Register = (props) => {

    const [phone, setPhone] = useState(null);
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
                            <TextField
                                id='phoneNumber'
                                label="Enter Phone Number"
                                variant='outlined'
                                name='phone'
                                className={classes.textField}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        <input
                            onClick={(event) => {
                                event.preventDefault();
                                
                                console.log(phone)
                                props.registerAsDriver(vehicle ,license, phone);
                              }}
                            type='button'
                            value="Register as Driver"
                            className={`${classes.connectButton} ${classes.rideButton}`} />
                    </form>
                    </div>
                    <div className={classes.rideInfoDiv}>
                    <form className={classes.userForm}>
                        <div className={classes.textFields}>
                            <TextField
                                id='phoneNumber'
                                label="Enter Phone Number"
                                variant='outlined'
                                name='phone'
                                className={classes.textField}
                                onChange={(e) => setPhone(e.target.value)}                            />
                        </div>
                        <input
                            onClick={(event) => {
                                event.preventDefault();
                                props.registerAsRider(phone);
                              }}
                            type='button'
                            value="Register as Rider"
                            className={`${classes.connectButton} ${classes.rideButton}`} />
                    </form>
                    </div>
            </>  
    )
}

export default Register