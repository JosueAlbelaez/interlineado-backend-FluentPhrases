import { Reading } from '../models/Reading.js';

// Get all readings
export const getReadings = async (req, res) => {
  try {
    const readings = await Reading.find({});
    res.json(readings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get reading by ID
export const getReadingById = async (req, res) => {
  try {
    const reading = await Reading.findById(req.params.id);
    if (reading) {
      res.json(reading);
    } else {
      res.status(404).json({ message: 'Reading not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new reading
export const createReading = async (req, res) => {
  try {
    const reading = new Reading(req.body);
    const newReading = await reading.save();
    res.status(201).json(newReading);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get readings by category
export const getReadingsByCategory = async (req, res) => {
  try {
    const readings = await Reading.find({ category: req.params.category });
    res.json(readings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};