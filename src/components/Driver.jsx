import useStyles from './styles/Home'
import taxiImage from "../assets/taxi.png"
import taxiIllustration from "../assets/CarIllustration.png"
import taxiIllustrationRight from "../assets/TaxiIllustrationRight.png"
import { Button, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from "react"
import { rideShare,contractMethod } from "../api/rideshare"

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';

const Driver = (props) => {

    let riders = new Array()

    useEffect(() => {
        async function fetchData() {
            await window.ethereum.request({ method: 'eth_requestAccounts' })
            const addr = window.ethereum.selectedAddress

            const riderList = await rideShare.getRideDetails()
            console.log(riderList)

            if (riderList.length!=0) {
                for (let i = 0; i < riderList.length; i++) {
                    if (parseInt(riderList[i].driverAddr) != 0) {
                    riders.push(riderList[i])
                    }                
                }
            }

        }
        fetchData();
    }, [])

    const classes = useStyles();
    return (
            <>            
           
                <div className={classes.rideInfoDiv}>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {riders.length!=0?<>{[1,2,3].map((rides) => (
                    <ListItem
                    // key={value}
                    disableGutters
                    secondaryAction={
                        
                        <Button 
                        variant='contained' 
                        onClick={(event) => {
                            event.preventDefault();
                            
                            props.selectRider(riders.rideId);
                          }}
                        className={classes.connectButton}>
                                            {riders.length!=0?<>Select</>:<></>}
                        </Button>
                    }
                    >
                    <ListItemText primary={"Ride Number : "+ rides.rideId} secondary={"Rider Address :"+ rides.riderAddr+"\n Pick up Point :"
                +rides.pickup+"\n Drop off Point :"+rides.dropoff+"\n Fare Amount :"+rides.fare} />
 
                    </ListItem>
                ))}</>:<>No Riders Available at the moment</>}
                
                </List>
                </div>
           
            </>
        
    )
}

export default Driver