import {BASE_URL} from '../utils/Constant';

export function getAllComplaints() {
  return function (dispatch, getState) {
    return new Promise(async (resolve, rejects) => {
      try {
        dispatch({
          type: 'GET_COMPLAINTS',
          subtype: 'loading',
        });
        var requestOptions = {
          method: 'GET',
          redirect: 'follow',
        };

        fetch(`${BASE_URL}findcomplaints`, requestOptions)
          .then(response => response.json())
          .then(result => {
            console.log(result);
            dispatch({
              type: 'GET_COMPLAINTS',
              subtype: 'success',
              complaintsData: result.complaints,
            });
            resolve(result);
          })
          .catch(error => {
            console.log('complaints error', error);
            rejects(error);
          });
      } catch (e) {
        dispatch({
          type: 'GET_COMPLAINTS',
          error: e,
        });
        rejects(e);
      }
    });
  };
}

export function makeComplaint(value) {
  return function (dispatch, getState) {
    return new Promise(async (resolve, rejects) => {
      try {
        dispatch({
          type: 'ADD_COMPLAINTS',
          subtype: 'loading',
        });

        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');

        var raw = JSON.stringify(value);

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow',
        };

        fetch(`${BASE_URL}addcomplaints`, requestOptions)
          .then(response => response.json())
          .then(result => {
            console.log('add complaint logs====', result);
            dispatch({
              type: 'ADD_COMPLAINTS',
              subtype: 'success',
            });
            resolve(result);
          })
          .catch(error => {
            console.log('complaints error', error);
            rejects(error);
          });
      } catch (e) {
        dispatch({
          type: 'ADD_COMPLAINTS',
          error: e,
        });
        rejects(e);
      }
    });
  };
}
