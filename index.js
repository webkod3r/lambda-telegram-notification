"use strict"

import { telegramNotification } from "./telegram.js";
import dotenv from "dotenv";
dotenv.config();

telegramNotification(process.env.TELEGRAM_CHAT_ID, "Demo message from lambda");