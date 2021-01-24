import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import { getFilmsByCharacter } from "../store/actions/films";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  select: {
    marginLeft: "35%"
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const DropdownStory = (props) => {
  const classes = useStyles();
  const [character, setCharacter] = useState({
    filmUrl: ""
  });

  const dispatch = useDispatch();
  const handleChange = (event) => {
    const name = event.target.name;
    setCharacter({
      [name]: event.target.value
    });
    if (event.target.value) {
      dispatch(getFilmsByCharacter(event.target.value));
    }
  };

  return (
    <div className={classes.select}>
      <FormControl className={classes.formControl}>
        <Select
          native
          value={character.filmUrl}
          onChange={handleChange}
          inputProps={{
            name: "filmUrl",
            id: "age-native-helper"
          }}
        >
          <option value="" disabled>
            Select
          </option>
          {(props.list || []).map((item, key) => {
            return (
              <option value={item.url} id={key}>
                {item.name}
              </option>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default DropdownStory;
