import useStyles from './styles/Home'
import { Button, Typography } from '@material-ui/core';
import React, { useEffect, useState } from "react"
import { rideShare } from "../api/rideshare"

const Navbar = (props) => {

    let [balanc,setBalance] = useState(0);

    useEffect(() => {
        async function fetchData() {
            await window.ethereum.request({ method: 'eth_requestAccounts' })
            const addr = window.ethereum.selectedAddress

            const balance = await rideShare.balanceOf(addr)
            console.log(balance)
            
            setBalance((parseInt(balance._hex))/(1000000000000000000))

        }
        fetchData();
    }, [])

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
                Balance:  {parseInt(balanc)} RID
            </Typography>
            </div>
           
    )
}

export default Navbar