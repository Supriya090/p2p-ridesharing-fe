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
        fontFamily: "Nunito, sans- serif",
        fontWeight: 800,
        fontSize: "2rem",
        padding: "30px 40px"
    },

    taxiImageStyle: {
        width: "400px",
        height: "275px",
        position: "absolute",
        top: 0,
        right: 0
    }
}))

export default useStyles;