
export default function onLogInAC(allUsers) {
    return {
      type: "ON-LOG-IN",
      allUsers: allUsers,
    };  
  }