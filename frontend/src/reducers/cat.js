const initstate = {
  cat: [],
  fetching: false,
  fetched: false,
  error: null
};

const cat = (state = initstate, action) => {
  switch (action.type) {
    case "GET_CAT_PENDING": {
      return { ...state, fetching: true };
    }
    case "GET_CAT_REJECTED": {
      return { ...state, fetching: false, error: action.payload };
    }
    case "GET_CAT_FULFILLED": {
      return {
        ...state,
        fetched: true,
        fetching: false,
        cat: action.payload.data
      };
    }
    default: {
      return state;
    }
  }
};

export default cat;
