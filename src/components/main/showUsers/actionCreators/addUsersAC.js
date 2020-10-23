
export default function addUsersAC(usersList) {
    return {
      type: "ADD-USERS",
      usersList: usersList,
    };  
  }