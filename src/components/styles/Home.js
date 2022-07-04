import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    mainContent: {
        width: "55vw",
        height: "80vh",
        backgroundColor: "#fff",
        margin: "auto",
        margiinTop: "20px",
        borderRadius: "15px",
        position: "relative",
        padding: "30px 40px",

    },

    addressText: {
        fontFamily: "Inter, sans-serif",
        fontSize: "1.1rem"
    },
    titleText: {
        fontFamily: "Nunito, sans- serif",
        fontWeight: 800,
        fontSize: "2.5rem",
        marginTop: "10px"
    },
    side_by_side : {
        display: "flex",
        flex_direction: "row"
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
        width: "45%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px 0px",
        borderRadius: "10px",
        marginTop: "20px"
    },

    taxiIllustrationStyle: {
        position: "absolute",
        bottom: 15,
        right: 100,
        height: "300px",
        width: "260px"
    },
    mint: {
        position: "absolute",
        bottom: 100,
        right: 0,
        height: "100px",
        width: "100px"
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
            },
            '&.Mui-focused fieldset': {
                borderColor: '#000',
                color: "#000",

            },
        },
    },
    textFields: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        marginTop: "10px"
    },

    textField: {
        marginBottom: "15px"
    },

    rideButton: {
        marginBottom: "0px"
    },

    quoteText: {
        fontFamily: "Nunito, sans- serif",
        fontWeight: 700,
        fontSize: "1.2rem",
        marginTop: "30px",
        fontStyle: "italic"
    },
}))

export default useStyles;