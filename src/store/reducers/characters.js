import * as actionType from "../actions/types";

const initialState = {
  films: [],
  loading: false,
  error: null
};

function films(state = initialState, action) {
  switch (action.type) {
    case actionType.CHARACTERS_LIST_START:
      return { ...state, loading: true, error: null };

    case actionType.CHARACTERS_LIST_SUCCESS:
      return { ...state, loading: false, error: null, list: action.value };

    case actionType.CHARACTERS_LIST_FAILURE:
      return { ...state, loading: false, error: action.value };

    default:
      return state;
  }
}

export default films;
