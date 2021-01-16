const initialState = {
  news: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  clearSuccess: false,
  clearError: false,
  alertMsg: '',
  uploadImage: false,
  pageInfo: {},
  refresh: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MYNEWS_PENDING': {
      return {
        ...state,
        clearSuccess: false,
        clearError: false,
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
        clearSuccess: false,
        clearError: false,
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

    case 'UPDATE_NEWS_PENDING': {
      return {
        ...state,
        clearSuccess: false,
        clearError: false,
        isLoading: true,
        isError: false,
        isSuccess: false,
        alertMsg: '',
      };
    }
    case 'UPDATE_NEWS_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        alertMsg: 'Update News succesfully!',
      };
    }
    case 'UPDATE_NEWS_REJECTED': {
      return {
        ...state,
        isError: true,
        isLoading: false,
        alertMsg: action.payload.response.data.message,
      };
    }

    case 'UPLOAD_IMAGE_PENDING': {
      return {
        ...state,
        clearSuccess: false,
        clearError: false,
        isLoading: true,
        isError: false,
        isSuccess: false,
        uploadImage: false,
        alertMsg: '',
      };
    }
    case 'UPLOAD_IMAGE_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        uploadImage: true,
        alertMsg: 'Update News succesfully!',
      };
    }
    case 'UPLOAD_IMAGE_REJECTED': {
      return {
        ...state,
        isError: true,
        isLoading: false,
        uploadImage: false,
        alertMsg: action.payload.response.data.message,
      };
    }

    case 'CREATE_NEWS_PENDING': {
      return {
        ...state,
        clearSuccess: false,
        clearError: false,
        isLoading: true,
        isError: false,
        isSuccess: false,
        alertMsg: '',
      };
    }
    case 'CREATE_NEWS_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        alertMsg: 'Create News succesfully!',
      };
    }
    case 'CREATE_NEWS_REJECTED': {
      return {
        ...state,
        isError: true,
        isLoading: false,
        alertMsg: action.payload.response.data.message,
      };
    }

    case 'CLEAR_SUCCESS_MESSAGE': {
      return {
        ...state,
        clearSuccess: true,
        isSuccess: false,
        alertMsg: '',
      };
    }

    case 'CLEAR_ERROR_MESSAGE': {
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
