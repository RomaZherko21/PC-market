export default function onTextTypingAC(text) {
    return {
      type: "ON-TEXT-TYPING",
      text: text,
    };  
  }