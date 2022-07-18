import useStyles from './styles/Home'
import taxiImage from "../assets/taxi.png"
import taxiIllustration from "../assets/CarIllustration.png"
import taxiIllustrationRight from "../assets/TaxiIllustrationRight.png"
import mint from "../assets/mint.jpg"
import { Button, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from "react"
import { rideShare,contractMethod } from "../api/rideshare"
import Navbar from './navbar';
import Rider from './Rider';
import Register from './register';
import Driver from './Driver';
import Owner from './owner';


const Home = (props) => {

    let [balance,setBalance] = useState(null)
    let [user, setUser] = useState(null)
    let [eth, setEther] = useState(0)
    let [pop, setPop] = useState(false)

    useEffect(() => {
        async function fetchData() {
            await window.ethereum.request({ method: 'eth_requestAccounts' })
            const addr = window.ethereum.selectedAddress

            const stat = await rideShare.getStatus(addr)
            setUser(stat)

            const balance = await rideShare.balanceOf(addr)
            setBalance(balance)

        }
        fetchData();
    }, [])
    const handleLogin =() =>{
        // getUser()
        if(user == 3){
            return(
               <Register 
               registerAsDriver = {props.registerAsDriver}
               registerAsRider = {props.registerAsRider}

               /> 
            )
        }

        if(user == 2){
            return(
                <Rider 
                findRide = {props.findRide}
                payDriver = {props.payDriver}
                cancelRide = {props.cancelRide}/>  
            )
        }

        if(user == 1){
            return(
               <Driver 
               selectRider = {props.selectRider}
               /> 
            )
        }

        if(user == 0){
            return(
                <Owner 
                ApproveDriver = {props.ApproveDriver}
                />  
            )
        }
    }

    const handleMint =()=>{
    return(                  
            <div className={classes.rideInfoDiv}>
                <form className={classes.userForm}>
                <div className={classes.textFields}>
                <Typography>1 ETH = 223100 RID</Typography>
                            <TextField
                                id='value to SWAP'
                                label="Enter value to swap"
                                variant='outlined'
                                name='value'
                                className={classes.textField}
                                onChange={(e) => setEther(e.target.value)}
                            />
                         
                        </div>
                        <div className={classes.side_by_side}>
                        <input
                            onClick={(event) => {
                                event.preventDefault()
                                props.mint(eth)
                                setPop(false)
                              }}
                            type='button'
                            value="Swap"
                            className={`${classes.connectButton} ${classes.rideButton}`} />
                        <input
                            onClick={(event) => {
                                setPop(false)
                              }}
                            type='button'
                            value="Close"
                            className={`${classes.connectButton} ${classes.rideButton}`} />
                        </div> 
                    </form>
            </div>
        )
    }

    
    const classes = useStyles();
    return (
        <div className={classes.mainContent}>
            <Typography className={classes.titleText}>RideSaathi</Typography>
            <img src={taxiImage} className={classes.taxiImageStyle} alt="TaxiImage" />
            <div className={classes.rideGraphicsDiv}>
                <img src={taxiIllustrationRight} className={classes.taxiIllustrationStyle} alt="TaxiIllustration" />
                <Navbar connectWallet = {props.connectWallet}
                    account = {props.account}
                    balance = {balance}/>
                <Typography className={classes.quoteText}>Easing Lives One Ride at a Time</Typography>
            </div>
            <button
            onClick={(event) => {
                event.preventDefault();
                setPop(true)
            }}
            className={classes.mint}>
                SWAP TO RID
            </button>
            
            
            {props.account==null?<></>:<>{handleLogin()}</>}
            {pop==true?<>{handleMint()}</>:<></>}

           
           
        </div>
    )
}

export default Home