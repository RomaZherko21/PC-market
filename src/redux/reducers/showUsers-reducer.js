const ADD_USERS = "ADD-USERS";
const ON_PAGE_CHANGE = "ON-PAGE-CHANGE";
const LOADING = "LOADING";

let initialState = {
  usersList: [],
  page: 1,
  count: 5,
  isFetching: false,
};

const showUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USERS: {
      return {
        ...state,
        usersList: [...action.usersList],
      };
    }
    case ON_PAGE_CHANGE: {
      return {
        ...state,
        page: state.page + action.increment,
      };
    }
    case LOADING: {
      console.log('herrer')
      return {
        ...state,
        isFetching: !state.isFetching,
      };
    }

    default:
      return state;
  }
};

export default showUsersReducer;
