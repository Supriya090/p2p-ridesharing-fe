import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    mainContent: {
        width: "55vw",
        height: "80vh",
        backgroundColor: "#fff",
        margin: "auto",
        marginTop: "20px",
        borderRadius: "15px",
        position: "relative",
        padding: "30px 40px",
    },

    tabIcons: {
        height: "30px",
        width: "30px"
    },

    addressText: {
        fontFamily: "Inter, sans-serif",
        fontSize: "1.1rem"
    },

    titleText: {
        fontFamily: "Nunito, sans- serif",
        fontWeight: 800,
        fontSize: "2.5rem",
        margin: "10px 0px 5px 0px",
    },

    taxiImageStyle: {
        width: "400px",
        height: "275px",
        position: "absolute",
        top: 0,
        right: 0
    },

    connectButton: {
        backgroundColor: "#000",
        color: "#fff",
        fontFamily: "Nunito, sans- serif",
        fontWeight: 800,
        fontSize: "1rem",
        padding: "7px 15px 5px 15px",
        marginBottom: "20px",
        borderRadius: "7px",
        transition: "0.3s all ease-out",
        "&:hover": {
            backgroundColor: "rgba(0, 0, 0,0.8)",
        },
    },

    rideInfoDiv: {
        backgroundColor: "#E5E5E5",
        width: "55%",
        display: "flex",
        // justifyContent: "center",
        alignItems: "center",
        padding: "15px 0px",
        borderRadius: "10px",
        position: "relative"
    },

    taxiIllustrationStyle: {
        position: "absolute",
        bottom: 45,
        right: 50,
        height: "250px",
        width: "230px"
    },

    userForm: {
        '& label.Mui-focused': {
            color: '#000',
        },
        '& .MuiOutlinedInput-root': {
            backgroundColor: "#D9D9D9",
            '& fieldset': {
                //borderColor: '#fff',
                //backgroundColor: "#D9D9D9",
                //color: "#000"
            },
            '&:hover fieldset': {
                borderColor: '#000',
            }
        },
    },

    textFields: {
        display: "flex",
        flexDirection: "column",
        width: "110%",
        marginLeft: "25px",
        marginBottom: "5px"
    },

    label: {
        margin: '10px 0px 3px 0px',
        fontFamily: "Nunito, sans- serif",
        fontWeight: 800,
        fontSize: "16px",
    },

    textField: {
        fontFamily: "Nunito, sans- serif",
        marginBottom: "5px",
    },

    rideButton: {
        margin: "20px 0px 10px 40px",
        position: "absolute",
        top: -75,
        right: 0
    },

    quoteText: {
        fontFamily: "Nunito, sans- serif",
        fontWeight: 700,
        fontSize: "1.1rem",
        fontStyle: "italic",
        position: "absolute",
        right: 35,
        bottom: 15
    },
}))

export { useStyles };