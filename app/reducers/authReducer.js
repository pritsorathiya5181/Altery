const initialState = {};

export default function auth(state = initialState, action = {}) {
  switch (action.type) {
    case 'USER_LOGIN': {
      return {
        ...state,
        userLoginDataError: action.error ? action.error : null,
        userLoginDataSuccess: action.subtype === 'success',
        userLoginDataLoading: action.subtype === 'loading',
        userLoginData:
          action.subtype === 'success'
            ? action.userLoginData
            : state.userLoginData,
      };
    }

    case 'USER_SIGNUP': {
      return {
        ...state,
        signupUserDataError: action.error ? action.error : null,
        signupUserDataSuccess: action.subtype === 'success',
        signupUserDataLoading: action.subtype === 'loading',
        signupUserData:
          action.subtype === 'success'
            ? action.signupUserData
            : state.signupUserData,
      };
    }

    case 'CONFIRM_SIGNUP': {
      return {
        ...state,
        confirmSignupDataError: action.error ? action.error : null,
        confirmSignupDataSuccess: action.subtype === 'success',
        confirmSignupDataLoading: action.subtype === 'loading',
      };
    }

    case 'FORGOT_PASSWORD': {
      return {
        ...state,
        forgotPassDataError: action.error ? action.error : null,
        forgotPassDataSuccess: action.subtype === 'success',
        forgotPassDataLoading: action.subtype === 'loading',
      };
    }

    case 'FORGOT_PASSWORD_OTP': {
      return {
        ...state,
        forgotPassOtpDataError: action.error ? action.error : null,
        forgotPassOtpDataSuccess: action.subtype === 'success',
        forgotPassOtpDataLoading: action.subtype === 'loading',
      };
    }

    default:
      return state;
  }
}
