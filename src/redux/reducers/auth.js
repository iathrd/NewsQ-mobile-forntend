const initialState = {
  isLogin: true,
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
        isError: false,
        alertMsg: 'Login ...',
      };
    }
    case 'LOGIN_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        isError: false,
        token: action.payload.data.token,
      };
    }
    case 'LOGIN_REJECTED': {
      return {
        ...state,
        isLogin: false,
        isError: true,
        alertMsg: 'Wrong email or password',
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
        isLogin: true,
        isError: false,
        isSuccess: true,
        alertMsg: 'Register succesfuly',
      };
    }
    case 'REGISTER_REJECTED': {
      return {
        ...state,
        isLogin: false,
        isError: true,
        isSuccess: false,
        alertMsg: action.payload.response.data.message,
      };
    }

    case 'CLEAR_MESSAGE': {
      return {
        ...state,
        isSuccess: false,
        isError: false,
        alertMsg: '',
        isLoading: false,
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
