"use strict";

import { telegramNotification } from "./telegram.js";

export const handler = async (event, context) => {
  console.log(JSON.stringify(event));
  console.log(JSON.stringify(context))

  const response = {
    statusCode: 200,
    body: JSON.stringify("Success"),
  };

  let events = event?.Records || []
  for (const ev of events) {
    try {
      if (ev?.EventSource !== 'aws:sns') {
        response.statusCode = 500;
        response.body = JSON.stringify('Invalid SNS event');
        return response;
      }
      const { subject, message } = processSNSEvent(ev);
      const tgResponse = await telegramNotification(process.env.TELEGRAM_CHAT_ID, `${subject} \n${message}`)
    } catch (err) {
      console.error("error sending telegram message", err);
      response.statusCode = 500;
      response.body = JSON.stringify(err)
    }
  }

  return response;
};

const processSNSEvent = (event) => {
  const subject = event?.Sns?.Subject || "Alert Notification";
  let message = event?.Sns?.Message || "{Running on lambda}";
  message = JSON.parse(message);

  message = `**${message['AlarmName']}** \n${message['AlarmDescription']}\n${message['NewStateReason']}`
  return { subject, message };
}