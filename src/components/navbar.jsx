import useStyles from './styles/Home'
import taxiImage from "../assets/taxi.png"
import taxiIllustration from "../assets/CarIllustration.png"
import taxiIllustrationRight from "../assets/TaxiIllustrationRight.png"
import { Button, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from "react"
import { rideShare,contractMethod } from "../api/rideshare"

const Navbar = (props) => {

    // const getBalance = async() =>{
    //     let balance = await rideShare.balanceOf(props.account)
    //     return (balance)
    // }

    const classes = useStyles();
    return (
        <div>
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
                Balance:  
                {props.account==null?<>Wallet not Connected</>:<>{}</>}

            </Typography>
            </div>
           
    )
}

export default Navbar