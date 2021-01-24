const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  alertMsg: '',
  category: [],
  news: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LIST_CATEGORY_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case 'LIST_CATEGORY_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        category: action.payload.data.data,
      };
    }
    case 'LIST_CATEGORY_REJECTED': {
      return {
        ...state,
        isError: true,
        isLoading: false,
        alertMsg: action.payload.response.data.message,
      };
    }

    case 'GET_CATEGORY_NEWS_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        alertMsg: 'Login ...',
      };
    }
    case 'GET_CATEGORY_NEWS_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        news: action.payload.data.data,
        alertMsg: 'Update user succesfully!',
      };
    }
    case 'GET_CATEGORY_NEWS_REJECTED': {
      return {
        ...state,
        isError: true,

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

    case 'CLEAR_MESSAGE': {
      return {
        ...state,
        isSuccess: false,
        isError: false,
        alertMsg: '',
      };
    }

    default: {
      return state;
    }
  }
};
