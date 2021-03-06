const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  error: false,
  alertMsg: '',
  user: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case 'GET_USER_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        user: action.payload.data.data,
      };
    }
    case 'GET_USER_REJECTED': {
      return {
        ...state,
        isError: true,
        isLoading: false,
        alertMsg: action.payload.response.data.message,
      };
    }

    case 'UPDATE_USER_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        alertMsg: 'Login ...',
      };
    }
    case 'UPDATE_USER_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        alertMsg: 'Update user succesfully!',
      };
    }
    case 'UPDATE_USER_REJECTED': {
      return {
        ...state,
        isError: true,
        isSuccess: false,
        isLoading: false,
        alertMsg: action.payload.response.data.message,
      };
    }

    case 'UPDATE_AVATAR_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        alertMsg: 'Login ...',
      };
    }
    case 'UPDATE_AVATAR_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        alertMsg: 'Update avatar succesfully!',
      };
    }
    case 'UPDATE_AVATAR_REJECTED': {
      return {
        ...state,
        isError: true,
        isSuccess: false,
        isLoading: false,
        alertMsg: 'Update avatar failed!',
      };
    }

    case 'CHANGE_PASSWORD_PENDING': {
      return {
        ...state,
        isLoading: true,
        error: false,
        isSuccess: false,
        alertMsg: 'Login ...',
      };
    }
    case 'CHANGE_PASSWORD_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        error: false,
        isSuccess: true,
        alertMsg: 'Password succesfuly change!',
      };
    }
    case 'CHANGE_PASSWORD_REJECTED': {
      return {
        ...state,
        error: true,
        isSuccess: false,
        isLoading: false,
        alertMsg: 'email is not registered',
      };
    }

    case 'CLEAR_MESSAGE': {
      return {
        ...state,
        isSuccess: false,
        isError: false,
        error: false,
        alertMsg: '',
      };
    }

    default: {
      return state;
    }
  }
};
