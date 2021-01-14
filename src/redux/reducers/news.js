const initialState = {
  news: [],
  searchNews: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  alertMsg: '',
  pageInfo: {},
  pageInfo2: {},
  refresh: false,
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
        refresh: false,
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
        refresh: true,
      };
    }
    case 'GET_NEWS_REJECTED': {
      return {
        ...state,
        isError: true,
        isLoading: false,
        alertMsg: action.payload.response.data.message,
        refresh: false,
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

    case 'SEARCH_NEWS_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        alertMsg: '',
        refresh: false,
      };
    }
    case 'SEARCH_NEWS_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        searchNews: action.payload.data.data,
        pageInfo2: action.payload.data.pageInfo,
        refresh: true,
      };
    }
    case 'SEARCH_NEWS_REJECTED': {
      return {
        ...state,
        isError: true,
        isLoading: false,
        alertMsg: action.payload.response.data.message,
        refresh: false,
      };
    }

    case 'LOAD_NEWS2_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        alertMsg: '',
      };
    }
    case 'LOAD_NEWS2_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        searchNews: [...state.news, ...action.payload.data.data],
        pageInfo2: {...action.payload.data.pageInfo},
      };
    }
    case 'LOAD_NEWS2_REJECTED': {
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
