import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../store/actions/characters";
import { makeStyles } from "@material-ui/core/styles";
import DropdownStory from "../component/Dropdown-story";
import ListStory from "../component/List-story";
import CircularProgress from "@material-ui/core/CircularProgress";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
const Home = () => {
  const [character, setCharacter] = useState([]);

  const dispatch = useDispatch();

  const useLoaderStyles = makeStyles((theme) => ({
    loading: {
      width: "600px",
      height: "40px",
      position: "absolute",
      top: "50%",
      bottom: "50%"
    },
    card: {
      maxWidth: "50%",
      marginLeft: "25%"
    },
    root: {
        minWidth: 275,
      },
  }));

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  const listOfCharacters = useSelector((state) => state.charactersState.list);
  const loading = useSelector((state) => state.charactersState.loading);
  const listOfMovies = useSelector((state) => state.filmsState.list);
  const classes = useLoaderStyles();

  return (
    <div>
      <Card  className={classes.root}>
        <CardContent>
          {loading ? (
            <CircularProgress className={classes.loading} />
          ) : (
            <div>
              <DropdownStory list={listOfCharacters} />
              <ListStory filmList={listOfMovies} />
            </div>
          )}
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </div>
  );
};

export default Home;
