import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Reading } from '../models/Reading.js';
import { connectDB } from '../config/db.js';

dotenv.config();

const sampleReadings = [
  {
    title: 'The Future of Technology',
    category: 'Technology',
    english_text: 'Artificial intelligence is transforming our world.\nMachine learning algorithms are becoming more sophisticated.\nThe future holds endless possibilities.',
    spanish_translation: 'La inteligencia artificial está transformando nuestro mundo.\nLos algoritmos de aprendizaje automático son cada vez más sofisticados.\nEl futuro contiene posibilidades infinitas.'
  },
  {
    title: 'A Day in Paris',
    category: 'Travel',
    english_text: 'The Eiffel Tower stands majestically against the sky.\nCafés line the charming cobblestone streets.\nThe aroma of fresh bread fills the morning air.',
    spanish_translation: 'La Torre Eiffel se alza majestuosamente contra el cielo.\nLos cafés bordean las encantadoras calles empedradas.\nEl aroma a pan fresco llena el aire de la mañana.'
  }
];

const seedDB = async () => {
  try {
    await connectDB();
    await Reading.deleteMany({});
    await Reading.insertMany(sampleReadings);
    console.log('Database seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDB();