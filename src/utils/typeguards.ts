import { Inbox } from "../typings/declarations";

const isChat = (message: Inbox.Message): message is Inbox.ChatMessage => {
  return `text` in message;
};

const isUsername = (message: Inbox.Message): message is Inbox.Username => {
  return `isUsernameAccepted` in message;
};

export { isChat, isUsername };