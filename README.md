# lambda-telegram-notification
AWS lambda function to notify about Cloudwatch alarms 

# Pre-requisites
This lambda function requires 2 env variables.
`TELEGRAM_CHAT_ID` which represents the chat or group ID receiving the notification
`TELEGRAM_TOKEN` that contains the telegram token for your app

# Testing with Docker

To test the Node.js application using Docker with the `node:22-alpine` image, you can use the following command:

```sh
docker run --rm -it -v $(pwd):/app -w /app node:22-alpine sh -c "npm install && node index.js"
```