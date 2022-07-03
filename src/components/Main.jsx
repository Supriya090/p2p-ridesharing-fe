import React from "react";
import Home from "./Home";
import Location from "./Location";
import { useStyles } from "./styles/Home";
import home from "../assets/home.png";
import location from "../assets/location.png";
import { Tabs, Tab } from "@material-ui/core";

const Main = (props) => {
  const classes = useStyles();
  const [tabState, setTabState] = React.useState("Home");

  const handleTabClick = (_, val) => {
    setTabState(val);
  };

  return (
    <div className={classes.mainContent}>
      <Tabs
        value={tabState}
        onChange={handleTabClick}
        style={{ paddingBottom: "30px" }}>
        <Tab
          icon={<img src={home} className={classes.tabIcons} alt='Home' />}
          value={"Home"}
          label='Home'
        />
        <Tab
          icon={
            <img src={location} className={classes.tabIcons} alt='Location' />
          }
          value={"Location"}
          label='Location'
        />
      </Tabs>
      {tabState === "Home" ? (
        <Home
          connectWallet={props.connectWallet}
          account={props.account}
          balance={props.balance}
          findRide={props.findRide}
        />
      ) : (
        <Location />
      )}
    </div>
  );
};

export default Main;
