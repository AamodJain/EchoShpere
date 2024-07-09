import express from 'express';

import { getConversations } from '../controllers/user.controllers.js';
import { protectRoute } from '../middlewares/protectRoute.middleware.js';

const router = express.Router();

router.get("/" , protectRoute,getConversations);

export default router;