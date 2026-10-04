import { createStore } from "redux";

const initialState = {
  name: "",
  email: "",
};

const UPDATE_NAME = "UPDATE_NAME";
const UPDATE_EMAIL = "UPDATE_EMAIL";

export const updateName = (name) => ({
  type: UPDATE_NAME,
  payload: name,
});

export const updateEmail = (email) => ({
  type: UPDATE_EMAIL,
  payload: email,
});

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NAME:
      return {
        ...state,
        name: action.payload,
      };

    case UPDATE_EMAIL:
      return {
        ...state,
        email: action.payload,
      };

    default:
      return state;
  }
};

const store = createStore(userReducer);

export default store;