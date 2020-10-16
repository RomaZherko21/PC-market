const ADD_COMMENT_HANDLE = "ADD-COMMENT-HANDLE";

const mainPageReducer = (state, action) => {
  switch (action.type) {
    case ADD_COMMENT_HANDLE:
      console.log("hehrere");
      state.comments.push({
        author: action.author,
        photo: "https://pcmarket.uz/wp-content/uploads/2020/07/0MWUDu3IHxw.jpg",
        text: action.text,
      });
      break;
    default:
      console.log("Нет таких значений");
  }

  return state;
};

export default mainPageReducer;
