import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

export const login =  (user, dispatch) => {
    const url = 'https://segware-book-api.segware.io/api/sign-in';
  dispatch(loginStart());
  try {
       axios.post(url, user)
      .then(function (response) {
        console.log(response);
        dispatch(loginSuccess(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    
  } catch (err) {
    dispatch(loginFailure());
  }
};