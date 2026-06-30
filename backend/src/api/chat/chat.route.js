import express from "express";

const chatRouter = express.Router();

import { 
  createConversationController, 
  getConversationController 
} from "./controller/chat.controller.js";

// /api/chat/conversation
chatRouter.post("/conversations", createConversationController);

chatRouter.get("/conversations", getConversationController);

export default chatRouter;