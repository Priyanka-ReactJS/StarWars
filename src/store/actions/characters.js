import * as actionType from "./types";
import axios from "axios";

export const fetchCharactersState = () => {
  return {
    type: actionType.CHARACTERS_LIST_START
  };
};

export const fetchCharactersSuccess = (listOfcharacters) => {
  return {
    type: actionType.CHARACTERS_LIST_SUCCESS,
    value: listOfcharacters
  };
};

export const fetchCharactersFailure = (error) => {
  return {
    type: actionType.CHARACTERS_LIST_FAILURE,
    value: error
  };
};

const ApiUrl = "https://swapi.dev/api/people/";

export const getCharacters = () => {
  return (dispatch) => {
    dispatch(fetchCharactersState());
    try {
      axios
        .get(ApiUrl)
        .then((response) => {
          let charactersList = [];
          charactersList = [...charactersList, ...response.data.results];
          dispatch(fetchCharactersSuccess(charactersList));
        })
        .catch((error) => {
          console.log("error..", error);
          dispatch(fetchCharactersFailure(error));
        });
    } catch (error) {
      dispatch(fetchCharactersFailure(error));
    }
  };
};
