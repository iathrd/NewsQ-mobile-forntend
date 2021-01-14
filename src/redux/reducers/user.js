const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
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
        isSuccess: false,
        alertMsg: 'Login ...',
      };
    }
    case 'GET_USER_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        user: action.payload.data.data,
        isSuccess: true,
      };
    }
    case 'GET_USER_REJECTED': {
      return {
        ...state,
        isLogin: false,
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
        isLogin: true,
        isError: false,
        isSuccess: true,
        alertMsg: action.payload.data.message,
      };
    }
    case 'UPDATE_USER_REJECTED': {
      return {
        ...state,
        isLogin: false,
        isError: true,
        isSuccess: false,
        isLoading: false,
        alertMsg: action.payload.response.data.message,
      };
    }

    case 'CLEAR_MESSAGE': {
      return {
        ...state,
        isSuccess: false,
        isError: false,
        alertMsg: '',
      };
    }

    case 'LOGOUT': {
      return {
        ...state,
        isLogin: false,
        token: '',
      };
    }
    default: {
      return state;
    }
  }
};
