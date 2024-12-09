import express from 'express';
import {
  getReadings,
  getReadingById,
  createReading,
  getReadingsByCategory
} from '../controllers/readingController.js';

const router = express.Router();

router.get('/', getReadings);
router.get('/:id', getReadingById);
router.post('/', createReading);
router.get('/category/:category', getReadingsByCategory);

export default router;