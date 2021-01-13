const initialState = {
  news: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  alertMsg: '',
  pageInfo: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_NEWS_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        alertMsg: '',
      };
    }
    case 'GET_NEWS_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        news: action.payload.data.data,
        pageInfo: action.payload.data.pageInfo,
      };
    }
    case 'GET_NEWS_REJECTED': {
      return {
        ...state,
        isError: true,
        isLoading: false,
        alertMsg: action.payload.response.data.message,
      };
    }

    case 'LOAD_NEWS_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        alertMsg: '',
      };
    }
    case 'LOAD_NEWS_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        news: [...state.news, ...action.payload.data.data],
        pageInfo: {...action.payload.data.pageInfo},
      };
    }
    case 'LOAD_NEWS_REJECTED': {
      return {
        ...state,
        isError: true,
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

    default: {
      return state;
    }
  }
};
