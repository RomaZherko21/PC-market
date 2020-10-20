const ON_NAME_TYPING = "ON-NAME-TYPING";

let initialState ={
    allUsers: [
      {
        name: "Admin",
        surname: "Admin",
        mail: "Admin@inbox.ru",
        adress: "Old Valey, 32",
        password: "1234",
      },
      {
        name: "Roma",
        surname: "Zher",
        mail: "RomaZher@inbox.ru",
        adress: "Old Valey, 32",
        password: "1234",
      },
      {
        name: "Max",
        surname: "But",
        mail: "MaxBut@inbox.ru",
        adress: "Old Valey, 32",
        password: "1234",
      },
      {
        name: "Ivan",
        surname: "Vas",
        mail: "IvanVas@inbox.ru",
        adress: "Old Valey, 32",
        password: "1234",
      },
    ],
    currentRegistrationInfo:  {
      name: "",
      surname: "",
      mail: "",
      adress: "",
      password: "",
    },
} 

const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_NAME_TYPING: {
      return {
        ...state,
        currentRegistrationInfo:{
          ...state.currentRegistrationInfo,
          name: action.text,
        }
      };
    }
    default:
      return state;
  }
};

export default registrationReducer;
