import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper
    },
    loading: {
        width: "600px",
        height: "40px",
        position: "absolute",
        top: "50%",
        bottom: "50%",
        left: "25%"
    }
}));

const LastMovieStory = (props) => {
    const loading = useSelector((state) => state.filmsState.loading);
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {loading ? (
                <CircularProgress className={classes.loading} />
            ) : (
                    <TextField id="filled-basic" label={props.title + ' - ' + props.releaseDate} variant="filled" />
                )}
        </div>
    );
};
export default LastMovieStory;
