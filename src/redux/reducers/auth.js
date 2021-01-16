const initialState = {
  isLogin: false,
  token: '',
  isLoading: false,
  isError: false,
  isSuccess: false,
  alertMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_PENDING': {
      return {
        ...state,
        isLoading: true,
        isLogin: false,
        isError: false,
        isSuccess: false,
        alertMsg: 'Login ...',
      };
    }
    case 'LOGIN_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        isError: false,
        isSuccess: true,
        token: action.payload.data.token,
      };
    }
    case 'LOGIN_REJECTED': {
      return {
        ...state,
        isLogin: false,
        isError: true,
        isLoading: false,
        alertMsg: action.payload.response.data.message,
      };
    }

    case 'REGISTER_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        alertMsg: 'Login ...',
      };
    }
    case 'REGISTER_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        alertMsg: action.payload.data.message,
      };
    }
    case 'REGISTER_REJECTED': {
      return {
        ...state,
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
