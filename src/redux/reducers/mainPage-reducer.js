import allGoods from '../../data/allGoods'
const ADD_COMMENT_HANDLE = "ADD-COMMENT-HANDLE";
const ON_NAME_TYPING = "ON-NAME-TYPING";
const ON_TEXT_TYPING = "ON-TEXT-TYPING";


let initialState = {
  discountGoods: allGoods.discountGoods,
  comments: [
    {
      author: "Lena Marsh",
      photo: "https://pcmarket.uz/wp-content/uploads/2020/07/0MWUDu3IHxw.jpg",
      text: `Здравствуйте. По совету подруги собрала компьютер на сайте PC market.uz и не пожалела- качественная сборка, бережная доставка порадовали. Работает мой ПК отлично, понадобился еще и принтер но я теперь знаю куда обращаться.`,
    },
    {
      author: "Lena Marsh",
      photo: "https://pcmarket.uz/wp-content/uploads/2020/07/0MWUDu3IHxw.jpg",
      text: `Здравствуйте. По совету подруги собрала компьютер на сайте PC market.uz и не пожалела- качественная сборка, бережная доставка порадовали. Работает мой ПК отлично, понадобился еще и принтер но я теперь знаю куда обращаться.Здравствуйте. По совету подруги собрала компьютер на сайте PC market.uz и не пожалела- качественная сборка, бережная доставка порадовали. Работает мой ПК отлично, понадобился еще и принтер но я теперь знаю куда обращаться.Здравствуйте. По совету подруги собрала компьютер на сайте PC market.uz и не пожалела- качественная сборка, бережная доставка порадовали. Работает мой ПК отлично, понадобился еще и принтер но я теперь знаю куда обращаться.Здравствуйте. По совету подруги собрала компьютер на сайте PC market.uz и не пожалела- качественная сборка, бережная доставка порадовали. Работает мой ПК отлично, понадобился еще и принтер но я теперь знаю куда обращаться.Здравствуйте. По совету подруги собрала компьютер на сайте PC market.uz и не пожалела- качественная сборка, бережная доставка порадовали. Работает мой ПК отлично, понадобился еще и принтер но я теперь знаю куда обращаться.Здравствуйте. По совету подруги собрала компьютер на сайте PC market.uz и не пожалела- качественная сборка, бережная доставка порадовали. Работает мой ПК отлично, понадобился еще и принтер но я теперь знаю куда обращаться.`,
    },
    {
      author: "Lena Marsh",
      photo: "https://pcmarket.uz/wp-content/uploads/2020/07/0MWUDu3IHxw.jpg",
      text: `Здравствуйте. По совету подруги собрала компьютер на сайте PC market.uz и не пожалела- качественная сборка, бережная доставка порадовали. Работает мой ПК отлично, понадобился еще и принтер но я теперь знаю куда обращаться.`,
    },
    {
      author: "Lena Marsh",
      photo: "https://pcmarket.uz/wp-content/uploads/2020/07/0MWUDu3IHxw.jpg",
      text: `Здравствуйте. По совету подруги собрала компьютер на сайте PC market.uz и не пожалела- качественная сборка, бережная доставка порадовали. Работает мой ПК отлично, понадобился еще и принтер но я теперь знаю куда обращаться.`,
    },
  ],
  currentComment: {
    name: "",
    text: "",
  },
};



const mainPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT_HANDLE:
      return {
        ...state,
        comments: [
          ...state.comments,
          {
            author: state.currentComment.name,
            text: state.currentComment.text,
            photo:
              "https://pcmarket.uz/wp-content/uploads/2020/07/0MWUDu3IHxw.jpg",
          },
        ],
        currentComment: {
          name: "",
          text: "",
        },
      };
    case ON_NAME_TYPING:
      return {
        ...state,
        currentComment: {
          ...state.currentComment,
          name: action.name,
        },
      };
    case ON_TEXT_TYPING:
      return {
        ...state,
        currentComment: {
          ...state.currentComment,
          text: action.text,
        },
      };

    default:
      return state;
  }
};


export function addComment() {
  return {
    type: "ADD-COMMENT-HANDLE",
  };  
}
export function onNameTyping(name) {
  return {
    type: "ON-NAME-TYPING",
    name: name,
  };  
}
export function onTextTyping(text) {
  return {
    type: "ON-TEXT-TYPING",
    text: text,
  };  
}

export default mainPageReducer;
