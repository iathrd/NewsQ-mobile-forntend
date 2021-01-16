const initialState = {
  news: [],
  searchNews: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  clearMessage: false,
  clearError: false,
  alertMsg: '',
  isLoadData: false,
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
        clearMessage: false,
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
        clearMessage: false,
      };
    }
    case 'GET_NEWS_REJECTED': {
      return {
        ...state,
        isError: true,
        isLoading: false,
        alertMsg: action.payload.response.data.message,
        refresh: false,
        clearMessage: false,
      };
    }

    case 'LOAD_NEWS_PENDING': {
      return {
        ...state,
        isLoadData: true,
        isError: false,
        isSuccess: false,
        alertMsg: '',
        clearMessage: false,
      };
    }
    case 'LOAD_NEWS_FULFILLED': {
      return {
        ...state,
        isLoadData: false,
        isError: false,
        isSuccess: true,
        news: [...state.news, ...action.payload.data.data],
        pageInfo: {...action.payload.data.pageInfo},
        clearMessage: false,
      };
    }
    case 'LOAD_NEWS_REJECTED': {
      return {
        ...state,
        isError: true,
        isLoadData: false,
        alertMsg: action.payload.response.data.message,
        clearMessage: false,
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
        clearMessage: false,
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
        clearMessage: false,
      };
    }
    case 'SEARCH_NEWS_REJECTED': {
      return {
        ...state,
        isError: true,
        isLoading: false,
        alertMsg: action.payload.response.data.message,
        refresh: false,
        clearMessage: false,
      };
    }

    case 'LOAD_NEWS2_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        alertMsg: '',
        clearMessage: false,
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
        clearMessage: false,
      };
    }
    case 'LOAD_NEWS2_REJECTED': {
      return {
        ...state,
        isError: true,
        isLoading: false,
        alertMsg: action.payload.response.data.message,
        clearMessage: false,
      };
    }

    case 'CLEAR_MESSAGE_SUCCESS': {
      return {
        ...state,
        clearMessage: true,
        isSuccess: false,
        alertMsg: '',
      };
    }

    case 'CLEAR_MESSAGE_SUCCESS': {
      return {
        ...state,
        clearMessage: true,
        isSuccess: false,
        alertMsg: '',
      };
    }

    case 'CLEAR_MESSAGE_SUCCESS': {
      return {
        ...state,
        clearMessage: true,
        isSuccess: false,
        alertMsg: '',
      };
    }
    case 'CLEAR_MESSAGE_ERROR': {
      return {
        ...state,
        clearError: true,
        isError: false,
        alertMsg: '',
      };
    }

    default: {
      return state;
    }
  }
};
