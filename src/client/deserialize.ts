import { Inbox } from "../typings/declarations";
import { count } from "../utils/console";
import { nay } from "../utils/nay";
import { rethrow } from "../utils/rethrow";

const deserialize = (message: string): Inbox.ChatMessage => {
  count(`client: deserialize`);
  let deserialized: Inbox.ChatMessage = {
    text: "",
    author: "",
    UUID: "",
  };
  try {
    deserialized = JSON.parse(message.toString());
  } catch (error) {
    error instanceof SyntaxError ? nay(`Deserialization failed!`, error) : rethrow(error);
  } finally {
    return deserialized;
  }
};

export { deserialize };
