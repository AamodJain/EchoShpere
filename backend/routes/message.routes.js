import express from 'express';

import { sendMessage } from '../controllers/message.controllers.js';
import { protectRoute } from '../middlewares/protectRoute.middleware.js';
import { getMessage } from '../controllers/message.controllers.js';

const router = express.Router();

router.post("/send/:id",protectRoute,sendMessage);
router.get("/:id",protectRoute,getMessage);

export default router;