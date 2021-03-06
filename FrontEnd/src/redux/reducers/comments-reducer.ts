const ADD_COMMENT_HANDLE = "ADD-COMMENT-HANDLE";
const ON_TEXT_TYPING = "ON-TEXT-TYPING";
const ON_NEXT_COMMENT_PAGE = "ON-NEXT-COMMENT-PAGE";
const ON_PREV_COMMENT_PAGE = "ON-PREV-COMMENT-PAGE";

interface Comment {
  author: string;
  photo: string;
  text: string;
}

//ACTION TYPES
type addCommentActionType = {
  type: typeof ADD_COMMENT_HANDLE;
  name: string;
  photo: string;
};
type onTextTypingActionType = {
  type: typeof ON_TEXT_TYPING;
  text: string;
};
type onNextCommentPageActionType = {
  type: typeof ON_NEXT_COMMENT_PAGE;
};
type onPrevCommentPageActionType = {
  type: typeof ON_PREV_COMMENT_PAGE;
};
type ActionType =
  | addCommentActionType
  | onTextTypingActionType
  | onNextCommentPageActionType
  | onPrevCommentPageActionType;

let initialState = {
  comments: [
    {
      author: "Антон",
      photo:
        "https://pcmarket.uz/wp-content/uploads/2020/07/photo_2019-10-23_16-32-37.jpg",
      text: `Доброе время суток! Понравился сайт и сервис. Хороший выбор, нашел что искал. Ещё что удобно, это доставка и своевременная как и обещали. Очень все удобно и продуманно.`,
    },
    {
      author: "Ислом Факиров",
      photo: "https://pcmarket.uz/wp-content/uploads/2020/07/i-7.jpg",
      text: `Доброго времени суток. Собирал игровой компьютер и наличие конфигуратора мне очень помогло. Выбрал нужную сборку по параметрам и оформил заказ с доставкой. Доставили быстро уже собранный, осталось включить и наслаждаться играми +100 к карме`,
    },
    {
      author: "Бахром Садиков",
      photo: "https://pcmarket.uz/wp-content/uploads/2020/07/i-4.jpg",
      text: `Доброго времени суток. Серфил по просторам интернета в поисках хорошего интернет магазина для ПК и вдруг БАЦ!- попал на сайт PC market.uz. Решил заказать комп и не прогадал. Ассортимент товара оказался разнообразным и главное, все в наличии! Цены приятно порадовали, скидки существенные, а возможность самому собрать ПК просто улет!`,
    },
    {
      author: "Lena Marsh",
      photo: "https://pcmarket.uz/wp-content/uploads/2020/07/0MWUDu3IHxw.jpg",
      text: `Здравствуйте. По совету подруги собрала компьютер на сайте PC market.uz и не пожалела- качественная сборка, бережная доставка порадовали. Работает мой ПК отлично, понадобился еще и принтер но я теперь знаю куда обращаться.`,
    },
    {
      author: "Светлана Перегудова",
      photo: "https://pcmarket.uz/wp-content/uploads/2020/07/i-3.jpg",
      text: `Здравствуйте. Заказала офисный компьютер на сайте PC market.uz и была приятно удивлена оперативностью выполнения заказа. Доставленный ПК я внимательно изучила вдоль и поперек- все отлично работает, нареканий нет, да еще гарантии на все комплектующие есть. Отличный сервис 5+`,
    },
    {
      author: "Сергей",
      photo: "https://pcmarket.uz/wp-content/uploads/2020/07/i-1.jpg",
      text: `Я долго не мог решиться на покупку ноутбука через интернет, я не знал как оплачивать, какой придет товар и т.п. Мне посоветовали обратиться именно к вам. Выбрав ноутбук на вашем сайте я заказал его по телефону, оплатить мне предложили двумя способами онлайн через сайт или после доставки курьеру, я выбрал оплату после доставки.Я долго не мог решиться на покупку ноутбука через интернет, я не знал как оплачивать, какой придет товар и т.п. Мне посоветовали обратиться именно к вам. Выбрав ноутбук на вашем сайте я заказал его по телефону, оплатить мне предложили двумя способами онлайн через сайт или после доставки курьеру, я выбрал оплату после доставки.`,
    },
    {
      author: "Александер Аверин",
      photo: "https://pcmarket.uz/wp-content/uploads/2020/07/i.jpg",
      text: `Я долго не мог решиться на покупку ноутбука через интернет, я не знал как оплачивать, какой придет товар и т.п. Мне посоветовали обратиться именно к вам. Выбрав ноутбук на вашем сайте я заказал его по телефону, оплатить мне предложили двумя способами онлайн через сайт или после доставки курьеру, я выбрал оплату после доставки.Я долго не мог решиться на покупку ноутбука через интернет, я не знал как оплачивать, какой придет товар и т.п. Мне посоветовали обратиться именно к вам. Выбрав ноутбук на вашем сайте я заказал его по телефону, оплатить мне предложили двумя способами онлайн через сайт или после доставки курьеру, я выбрал оплату после доставки.Мы открывали клинику в районе Чиланзара. Нам необходимо было подобрать для нашей работы офисную технику. Специалисты компании PcMarket предложили свою помощь, они приехали к нам и бесплатно все просчитали, выслушали наши потребности и подобрали для нас всю офисную технику и самое главное по низкой цене и еще сделали нам хорошую скидку. По мимо этого всю […]`,
    },
    {
      author: "Фарух Алиев",
      photo: "https://pcmarket.uz/wp-content/uploads/2020/05/i-2.jpg",
      text: `Здравствуйте! Хочу посоветовать всем кто ищет хороших поставщиков компьютерной техники именно этот интернет магазин. Я Сам приехал с Казахстана делать компьютерный игровой бизнес в Узбекистане и благодаря компании PCMARKET мы очень быстро собрали все необходимое оборудование, начиная от компьютеров, заканчивая игровыми креслами и столами. оплатить мне предложили двумя способами онлайн через сайт или после доставки курьеру, я выбрал оплату после доставки.Я долго не мог решиться на покупку ноутбука через интернет, я не знал как оплачивать, какой придет товар и т.п. Мне посоветовали обратиться именно к вам. Выбрав ноутбук на вашем сайте я заказал его по телефону, оплатить мне предложили двумя способами онлайн через сайт или после доставки курьеру, я выбрал оплату после доставки.Мы открывали клинику в районе Чиланзара. Нам необходимо было подобрать для нашей работы офисную технику. Специалисты компании PcMarket предложили свою помощь, они приехали к нам и бесплатно все просчитали, выслушали наши потребности и подобрали для нас всю офисную технику и самое главное по низкой цене и еще сделали нам хорошую скидку. По мимо этого всю […]`,
    },
  ] as Array<Comment>,
  someComments: [
    {
      author: "Антон",
      photo:
        "https://pcmarket.uz/wp-content/uploads/2020/07/photo_2019-10-23_16-32-37.jpg",
      text: `Доброе время суток! Понравился сайт и сервис. Хороший выбор, нашел что искал. Ещё что удобно, это доставка и своевременная как и обещали. Очень все удобно и продуманно.`,
    },
    {
      author: "Ислом Факиров",
      photo: "https://pcmarket.uz/wp-content/uploads/2020/07/i-7.jpg",
      text: `Доброго времени суток. Собирал игровой компьютер и наличие конфигуратора мне очень помогло. Выбрал нужную сборку по параметрам и оформил заказ с доставкой. Доставили быстро уже собранный, осталось включить и наслаждаться играми +100 к карме`,
    },
    {
      author: "Бахром Садиков",
      photo: "https://pcmarket.uz/wp-content/uploads/2020/07/i-4.jpg",
      text: `Доброго времени суток. Серфил по просторам интернета в поисках хорошего интернет магазина для ПК и вдруг БАЦ!- попал на сайт PC market.uz. Решил заказать комп и не прогадал. Ассортимент товара оказался разнообразным и главное, все в наличии! Цены приятно порадовали, скидки существенные, а возможность самому собрать ПК просто улет!`,
    },
    {
      author: "Lena Marsh",
      photo: "https://pcmarket.uz/wp-content/uploads/2020/07/0MWUDu3IHxw.jpg",
      text: `Здравствуйте. По совету подруги собрала компьютер на сайте PC market.uz и не пожалела- качественная сборка, бережная доставка порадовали. Работает мой ПК отлично, понадобился еще и принтер но я теперь знаю куда обращаться.`,
    },
    {
      author: "Светлана Перегудова",
      photo: "https://pcmarket.uz/wp-content/uploads/2020/07/i-3.jpg",
      text: `Здравствуйте. Заказала офисный компьютер на сайте PC market.uz и была приятно удивлена оперативностью выполнения заказа. Доставленный ПК я внимательно изучила вдоль и поперек- все отлично работает, нареканий нет, да еще гарантии на все комплектующие есть. Отличный сервис 5+`,
    },
    {
      author: "Сергей",
      photo: "https://pcmarket.uz/wp-content/uploads/2020/07/i-1.jpg",
      text: `Я долго не мог решиться на покупку ноутбука через интернет, я не знал как оплачивать, какой придет товар и т.п. Мне посоветовали обратиться именно к вам. Выбрав ноутбук на вашем сайте я заказал его по телефону, оплатить мне предложили двумя способами онлайн через сайт или после доставки курьеру, я выбрал оплату после доставки.Я долго не мог решиться на покупку ноутбука через интернет, я не знал как оплачивать, какой придет товар и т.п. Мне посоветовали обратиться именно к вам. Выбрав ноутбук на вашем сайте я заказал его по телефону, оплатить мне предложили двумя способами онлайн через сайт или после доставки курьеру, я выбрал оплату после доставки.`,
    },
  ] as Array<Comment>,
  currentCommentPage: 1 as number,
  currentComment: {
    text: "",
    name: "",
  } as { text: string; name: string },
};
type InitialStateType = typeof initialState;

function getSomeComments(
  comments: Array<Comment>,
  page: number
): Array<Comment> {
  let arr: Array<Comment> = [];
  for (let i = (page - 1) * 6; i < page * 6; i++) {
    if (comments[i]) arr.push(comments[i]);
  }
  return arr;
}

const commentsReducer = (
  state = initialState,
  action: ActionType
): InitialStateType => {
  switch (action.type) {
    case ADD_COMMENT_HANDLE:
      return {
        ...state,
        comments: [
          ...state.comments,
          {
            author: action.name,
            text: state.currentComment.text,
            photo: action.photo,
          },
        ],
        currentComment: {
          name: "",
          text: "",
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
    case ON_NEXT_COMMENT_PAGE: {
      if (state.currentCommentPage + 1 > Math.ceil(state.comments.length / 6))
        return state;
      return {
        ...state,
        currentCommentPage: state.currentCommentPage + 1,
        someComments: [
          ...getSomeComments(state.comments, state.currentCommentPage + 1),
        ],
      };
    }
    case ON_PREV_COMMENT_PAGE: {
      if (state.currentCommentPage - 1 <= 0) return state;
      return {
        ...state,
        currentCommentPage: state.currentCommentPage - 1,
        someComments: getSomeComments(
          state.comments,
          state.currentCommentPage - 1
        ),
      };
    }
    default:
      return state;
  }
};

export const addComment = (
  name: string,
  photo: string
): addCommentActionType => ({
  type: ADD_COMMENT_HANDLE,
  name,
  photo,
});
export const onTextTyping = (text: string): onTextTypingActionType => ({
  type: "ON-TEXT-TYPING",
  text,
});
export const onNextCommentPage = (): onNextCommentPageActionType => ({
  type: "ON-NEXT-COMMENT-PAGE",
});
export const onPrevCommentPage = (): onPrevCommentPageActionType => ({
  type: "ON-PREV-COMMENT-PAGE",
});

export default commentsReducer;
