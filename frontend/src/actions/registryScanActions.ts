import axios from 'axios';

export const actions: Record<string, string> = {
  FETCH_REQUEST: 'FETCH_REQUEST',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_FAILURE: 'FETCH_FAILURE',
};

export const fetchInstalledPrograms = () => (dispatch: Function) => {
  dispatch({ type: actions.FETCH_REQUEST });

  return axios
    .get(`http://127.0.0.1:8000/analyzer/local/windows/`)
    .then(({ data }) => {
      dispatch({
        type: actions.FETCH_SUCCESS,
        payload: {
          data,
        },
      });
    })
    .catch((err) => {
      dispatch({
        type: actions.FETCH_FAILURE,
        payload: {
          error: err.message,
        },
      });
    });
};
