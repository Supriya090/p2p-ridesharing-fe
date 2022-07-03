import React from "react";
import { useStyles } from "./styles/Home";
import taxiImage from "../assets/taxi.png";
import taxiIllustrationRight from "../assets/TaxiIllustrationRight.png";
import { Button, TextField, Typography } from "@material-ui/core";
import useStore from "../hooks/useStore";
import { useState } from "react";

const Home = (props) => {
  const classes = useStyles();
  const { state } = useStore();
  const [balance, setBalance] = useState(null);
  const getBalance = async () => {};

  return (
    <div>
      <Button variant='contained' className={classes.connectButton}>
        {props.account == null ? <>Connect Wallet</> : <>Wallet Connected</>}
      </Button>
      <Typography className={classes.addressText}>
        Address:{" "}
        {props.account == null ? (
          <>Wallet not Connected</>
        ) : (
          <>{props.account}</>
        )}
      </Typography>
      <Typography className={classes.addressText}>
        Balance: {getBalance}
      </Typography>
      <Typography className={classes.titleText}>RideSaathi</Typography>
      <img src={taxiImage} className={classes.taxiImageStyle} alt='TaxiImage' />
      <div className={classes.rideGraphicsDiv}>
        <img
          src={taxiIllustrationRight}
          className={classes.taxiIllustrationStyle}
          alt='TaxiIllustration'
        />
        <div className={classes.rideInfoDiv}>
          <form className={classes.userForm}>
            <div className={classes.textFields}>
              <label className={classes.label}>Pickup Location</label>
              <TextField
                id='pickupLocation'
                variant='outlined'
                name='pickupLocation'
                value={
                  state?.pickUp
                    ? `Latitude: ${state?.pickUp.lat} \nLongitude: ${state?.pickUp.lng}`
                    : "Please Select from Location tab"
                }
                disabled={true}
                multiline={true}
                size='small'
                className={classes.textField}
              />
              <label className={classes.label}>Drop Location</label>
              <TextField
                id='dropoffLocation'
                variant='outlined'
                name='dropoffLocation'
                value={
                  state?.dropOff
                    ? `Latitude: ${state?.dropOff.lat} \nLongitude: ${state?.dropOff.lng}`
                    : "Please Select from Location tab"
                }
                disabled={true}
                multiline={true}
                size='small'
                className={classes.textField}
              />
            </div>
            <input
              type='button'
              value='Find a Ride'
              className={`${classes.connectButton} ${classes.rideButton}`}
            />
          </form>
        </div>
        <Typography className={classes.quoteText}>
          Easing Lives One Ride at a Time
        </Typography>
      </div>
    </div>
  );
};

export default Home;
