import express from "express";

import { addUser,getUsers } from "../contoller/user-controller.js";
import { newConversation,getConversation } from "../contoller/conversation-controller.js";
import { getMessages, newMessage } from "../contoller/message-control.js";

const route=express.Router();


route.post('/add',addUser);
route.get('/users',getUsers);

route.post('/conversation/add',newConversation);
route.post('/conversation/get',getConversation);

route.post('/message/add',newMessage);
route.get('/message/get/:id',getMessages);

export default route;