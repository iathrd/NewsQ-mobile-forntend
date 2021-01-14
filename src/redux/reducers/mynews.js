const initialState = {
  news: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  alertMsg: '',
  pageInfo: {},
  refresh: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MYNEWS_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        alertMsg: '',
        refresh: false,
      };
    }
    case 'GET_MYNEWS_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        news: action.payload.data.data,
        pageInfo: action.payload.data.pageInfo,
        refresh: true,
      };
    }
    case 'GET_MYNEWS_REJECTED': {
      return {
        ...state,
        isError: true,
        isLoading: false,
        alertMsg: action.payload.response.data.message,
        refresh: false,
      };
    }

    case 'LOAD_MYNEWS_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        alertMsg: '',
      };
    }
    case 'LOAD_MYNEWS_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        news: [...state.news, ...action.payload.data.data],
        pageInfo: {...action.payload.data.pageInfo},
      };
    }
    case 'LOAD_MYNEWS_REJECTED': {
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
