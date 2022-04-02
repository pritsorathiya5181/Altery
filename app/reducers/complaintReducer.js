const initialState = {};

export default function home(state = initialState, action = {}) {
  switch (action.type) {
    case 'GET_COMPLAINTS': {
      return {
        ...state,
        complaintsDataError: action.error ? action.error : null,
        complaintsDataSuccess: action.subtype === 'success',
        complaintsDataLoading: action.subtype === 'loading',
        complaintsData:
          action.subtype === 'success'
            ? action.complaintsData
            : state.complaintsData,
      };
    }

    case 'ADD_COMPLAINTS': {
      return {
        ...state,
        addComplaintDataError: action.error ? action.error : null,
        addComplaintDataSuccess: action.subtype === 'success',
        addComplaintDataLoading: action.subtype === 'loading',
      };
    }

    default:
      return state;
  }
}
