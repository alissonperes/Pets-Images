const initstate = {
  dog: [],
  fetching: false,
  fetched: false,
  error: null
};

const dog = (state = initstate, action) => {
  switch (action.type) {
    case "GET_DOG_PENDING": {
      return { ...state, fetching: true };
    }
    case "GET_DOG_REJECTED": {
      return { ...state, fetching: false, error: action.payload };
    }
    case "GET_DOG_FULFILLED": {
      return {
        ...state,
        fetched: true,
        fetching: false,
        dog: action.payload.data[0]
      };
    }
    default: {
      return state;
    }
  }
};

export default dog;
