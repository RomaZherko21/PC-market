import usersAPI from "../../api/api";

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
      return {
        ...state,
        isFetching: !state.isFetching,
      };
    }

    default:
      return state;
  }
};



 function loadingAC() {
  return {
    type: "LOADING"
  };  
}
function addUsersAC(usersList) {
  return {
    type: "ADD-USERS",
    usersList: usersList,
  };  
}

function onPageChangeAC(increment) {
  return {
    type: "ON-PAGE-CHANGE",
    increment: increment,
  };  
}


export const getUsersThunkCreator = (count, page) => {
  return (dispatch) => {
    dispatch(loadingAC())
    usersAPI.getUsers(count, page)
      .then(response => {
        dispatch(addUsersAC(response.data.items));
        dispatch(loadingAC())
      })
  };
};

export const getNewUsersThunkCreator = (count, page,num) => {
  return (dispatch) => {
    dispatch(loadingAC())
    dispatch(onPageChangeAC(num))
    usersAPI.getUsers(count, page+num)
      .then(response => {
        dispatch(addUsersAC(response.data.items));
        dispatch(loadingAC())
      })
  };
};

export default showUsersReducer;
