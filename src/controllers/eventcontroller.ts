import { Request, Response } from 'express';
import EventModel, { Event } from '../models/events';

export const listEvents = async (req: Request, res: Response): Promise<void> => {
  try {
    const events = await EventModel.find();
    res.status(200).json(events);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const getEventById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const event = await EventModel.findById(id);
    if (!event) {
      res.status(404).json({ message: 'Event not found' });
      return;
    }
    res.status(200).json(event);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const addEvent = async (req: Request, res: Response): Promise<void> => {
  try {
    const eventData: Event = req.body;
    const newEvent = new EventModel(eventData);
    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const updateEvent = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const eventData: Event = req.body;
    const updatedEvent = await EventModel.findByIdAndUpdate(id, eventData, { new: true });
    if (!updatedEvent) {
      res.status(404).json({ message: 'Event not found' });
      return;
    }
    res.status(200).json(updatedEvent);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteEvent = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const deletedEvent = await EventModel.findByIdAndDelete(id);
    if (!deletedEvent) {
      res.status(404).json({ message: 'Event not found' });
      return;
    }
    res.status(200).json({message: "Deleted event successfully"});
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};


