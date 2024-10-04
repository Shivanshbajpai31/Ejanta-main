// checkboxRoutes.js
import express from 'express';
import checkboxController from '../controllers/checkboxControllers.js';

const router = express.Router();

router.post('/update', checkboxController.updateCheckboxStatus);

export default router;
