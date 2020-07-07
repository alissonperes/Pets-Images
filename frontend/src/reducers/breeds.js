const initstate = {
  breeds: [],
  fetching: false,
  fetched: false,
  error: null
};

const breeds = (state = initstate, action) => {
  switch (action.type) {
    case "GET_BREEDS_PENDING": {
      return { ...state, fetching: true, error: null };
    }
    case "GET_BREEDS_REJECTED": {
      return { ...state, fetching: false, error: action.payload };
    }
    case "GET_BREEDS_FULFILLED": {
      return {
        ...state,
        fetched: true,
        fetching: false,
        error: null,
        breeds: action.payload.data
      };
    }
    default: {
      return state;
    }
  }
};

export default breeds;
