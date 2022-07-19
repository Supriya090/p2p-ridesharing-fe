import useStyles from './styles/Home'
import { Button } from '@material-ui/core';
import React, { useEffect, useState } from "react"
import { rideShare } from "../api/rideshare"

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Driver = (props) => {

    let [riders,setRiders] = useState([])

    useEffect(() => {
        async function fetchData() {
            await window.ethereum.request({ method: 'eth_requestAccounts' })
            const addr = window.ethereum.selectedAddress

            const riderList = await rideShare.getWaitingRiders()
            let temp = new Array()
            let count = 0
            for (let i = 0; i < riderList.length; i++) {
                if (riderList[i].fare !=0) {
                    temp[count] = riderList[i]
                    count++
                }
                
            }
            console.log(temp)

     
            setRiders(temp)

        }
        fetchData();
    }, [])

    const classes = useStyles();
    return (
            <>            
           
                <div className={classes.rideInfoDiv}>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {console.log(riders.length)}
                    {(riders.length!=0 )?<>{riders.map((rides) => (
                        <ListItem
                        // key={value}
                        disableGutters
                        secondaryAction={
                            
                            <Button 
                            variant='contained' 
                            onClick={(event) => {
                                event.preventDefault();
                                
                                props.selectRider(rides.id);
                              }}
                            className={classes.connectButton}>
                                                {riders.length!=0?<>Select</>:<></>}
                            </Button>
                        }
                        >
                        <ListItemText primary={"Ride Number : "+ rides.id} secondary={"Rider Address :"+ rides.ridedetails.riderAddr+"\n Pick up Point :"
                    +rides.pickup+"\n Drop off Point :"+rides.dropoff+"\n Fare Amount :"+rides.fare+"\n Phone Number :"+rides.ridedetails.phoneNumber} />
                    </ListItem> 
                    
                    
                ))}</>:<>No Riders Available at the moment</>}
                
                </List>
                </div>
           
            </>
        
    )
}

export default Driver