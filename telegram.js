"use strict";

import { Telegraf } from "telegraf";
// import { FmtString } from "telegraf/format";

export const telegramNotification = async (chatID, message ) => {
  // @see https://telegraf.js.org/classes/Telegram.html#constructor
  const app = new Telegraf(process.env.TELEGRAM_TOKEN);
  // const formattedMessage = new FmtString(message);
  // return await app.telegram.sendMessage(chatID, formattedMessage, {
  //   parse_mode: "MarkdownV2",
  // });
  return await app.telegram.sendMessage(chatID, message);
};