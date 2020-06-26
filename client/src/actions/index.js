import axios from 'axios';
import { FETCH_USER } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/auth/current_user');
  console.log(res);
  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};

//NORMAL LAYOUT
// export const fetchUser = () => {
//   return function (dispatch) {
//     axios
//       .get('/auth/current_user')
//       .then(res => dispatch({
//         type: FETCH_USER,
//         payload: res.data
//       }))
//   }
// };