import { SET_USER } from '../constans';

const setUser = (user) => ({
    type: SET_USER,
    user
  });

  export const checkUserLogin = (user) => dispatch => dispatch(setUser(user));
// export const checkUserLogin = (data) => dispatch =>
//   axios.post('/api/users/login', data)
//     .then(res => {
//       return res.data;
//     })
//     .then(usuario => dispatch(setUser(usuario)));