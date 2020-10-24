
export default function onChangeCurrentUserAC(user) {
    return {
      type: "ON-CHANGE-CURRENT-USER",
      user:user,
    };  
  }