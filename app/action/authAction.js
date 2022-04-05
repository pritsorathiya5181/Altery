import AsyncStorage from '@react-native-async-storage/async-storage';
import {LOGIN_BASE_URL} from '../utils/Constant';

export function userLogin(value) {
  return function (dispatch, getState) {
    return new Promise(async (resolve, rejects) => {
      try {
        dispatch({
          type: 'USER_LOGIN',
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

        fetch(`${LOGIN_BASE_URL}signin`, requestOptions)
          .then(response => response.json())
          .then(result => {
            console.log(result.accessToken);
            dispatch({
              type: 'USER_LOGIN',
              subtype: 'success',
              userLoginData: result,
            });
            AsyncStorage.setItem('accessToken', result.accessToken?.jwtToken);
            AsyncStorage.setItem(
              'userInfo',
              JSON.stringify(result.idToken?.payload),
            );
            resolve(result);
          })
          .catch(error => {
            console.log('complaints error', error);
            rejects(error);
          });
      } catch (e) {
        dispatch({
          type: 'USER_LOGIN',
          error: e,
        });
        rejects(e);
      }
    });
  };
}

export function userSignup(value) {
  return function (dispatch, getState) {
    return new Promise(async (resolve, rejects) => {
      try {
        dispatch({
          type: 'USER_SIGNUP',
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

        fetch(`${LOGIN_BASE_URL}signup`, requestOptions)
          .then(response => response.json())
          .then(result => {
            console.log('signup logs====', result);
            if (result.success) {
              dispatch({
                type: 'USER_SIGNUP',
                subtype: 'success',
              });
              resolve(result);
            } else {
              rejects('Error in creating the User');
            }
          })
          .catch(error => {
            console.log('complaints error', error);
            rejects(error);
          });
      } catch (e) {
        dispatch({
          type: 'USER_SIGNUP',
          error: e,
        });
        rejects(e);
      }
    });
  };
}

export function confirmSignup(value) {
  return function (dispatch, getState) {
    return new Promise(async (resolve, rejects) => {
      try {
        dispatch({
          type: 'CONFIRM_SIGNUP',
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

        fetch(`${LOGIN_BASE_URL}confirm-signup`, requestOptions)
          .then(response => response.json())
          .then(result => {
            console.log('confirm signup logs====', result);
            if (result.success) {
              dispatch({
                type: 'CONFIRM_SIGNUP',
                subtype: 'success',
              });
              resolve(result);
            } else {
              rejects(result.message);
            }
          })
          .catch(error => {
            console.log('complaints error', error);
            rejects(error);
          });
      } catch (e) {
        dispatch({
          type: 'CONFIRM_SIGNUP',
          error: e,
        });
        rejects(e);
      }
    });
  };
}

export function forgotPassword(value) {
  return function (dispatch, getState) {
    return new Promise(async (resolve, rejects) => {
      try {
        dispatch({
          type: 'FORGOT_PASSWORD',
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

        fetch(`${LOGIN_BASE_URL}forgot-password`, requestOptions)
          .then(response => response.json())
          .then(result => {
            console.log('forgot-password logs====', result);
            if (result.success) {
              dispatch({
                type: 'FORGOT_PASSWORD',
                subtype: 'success',
              });
              resolve(result);
            } else {
              rejects('Error in creating the User');
            }
          })
          .catch(error => {
            console.log('complaints error', error);
            rejects(error);
          });
      } catch (e) {
        dispatch({
          type: 'FORGOT_PASSWORD',
          error: e,
        });
        rejects(e);
      }
    });
  };
}

export function forgotPasswordOtp(value) {
  return function (dispatch, getState) {
    return new Promise(async (resolve, rejects) => {
      try {
        dispatch({
          type: 'FORGOT_PASSWORD_OTP',
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

        fetch(`${LOGIN_BASE_URL}opt-forgot-password`, requestOptions)
          .then(response => response.json())
          .then(result => {
            console.log('forgout pass otp logs====', result);
            if (result.success) {
              dispatch({
                type: 'FORGOT_PASSWORD_OTP',
                subtype: 'success',
              });
              resolve(result);
            } else {
              rejects(result.message);
            }
          })
          .catch(error => {
            console.log('complaints error', error);
            rejects(error);
          });
      } catch (e) {
        dispatch({
          type: 'FORGOT_PASSWORD_OTP',
          error: e,
        });
        rejects(e);
      }
    });
  };
}
