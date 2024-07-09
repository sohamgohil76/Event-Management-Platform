import express from 'express';
import { addEvent, deleteEvent, getEventById, listEvents, updateEvent } from '../controllers/eventcontroller';

const router = express.Router();

router.post('/events', addEvent);
router.put('/events/:id', updateEvent);
router.delete('/events/:id', deleteEvent);
router.get('/events/:id', getEventById);
router.get('/events', listEvents);

export default router;
