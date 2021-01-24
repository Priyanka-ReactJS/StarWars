import * as actionType from "./types";
import axios from "axios";

export const fetchFilmsByCharacterState = () => {
  return {
    type: actionType.FILMS_LIST_START
  };
};

export const fetchFilmsByCharacterSuccess = (listOfcharacters) => {
  return {
    type: actionType.FILMS_LIST_SUCCESS,
    value: listOfcharacters
  };
};

export const fetchFilmsByCharacterFailure = (error) => {
  return {
    type: actionType.FILMS_LIST_FAILURE,
    value: error
  };
};

async function apiCall(filmUrl) {
  const res = await axios(filmUrl);
  return await res;
}

async function dataList(filmsList) {
  var filmData = {};
  var cdata = await filmsList.map((filmUrl) => {
    var parts = filmUrl.split("/");
    var result = parts[parts.length - 2];
    var a = apiCall(filmUrl).then((filmDetails) => {
      if (!filmData[result]) {
        filmData[result] = [];
    }
    filmDetails.data.release_date = new Date(filmDetails.data.release_date);;
    filmData[result].push(filmDetails);
      return filmData[result].shift().data;
    });
    return a;
  });
  return Promise.all(cdata);
}

export const getFilmsByCharacter = (url) => {
  return (dispatch) => {
    dispatch(fetchFilmsByCharacterState());
    try {
      axios
        .get(url)
        .then((response) => {
          let filmsList = [];
          filmsList = [...filmsList, ...response.data.films];
          if (filmsList.length > 0) {
            dataList(filmsList).then((response) => {
              // DESC Sort films array by Release date 
                response.sort((a,b)=>b.release_date.getTime()-a.release_date.getTime());
                dispatch(fetchFilmsByCharacterSuccess(response));
            });
          }
        })
        .catch((error) => {
          console.log("error..", error);
          dispatch(fetchFilmsByCharacterFailure(error));
        });
    } catch (error) {
      dispatch(fetchFilmsByCharacterFailure(error));
    }
  };
};

