import mongoose from 'mongoose';

const readingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    enum: [
      'Technology',
      'Literature',
      'Work',
      'Studies',
      'Home',
      'Travel',
      'Food',
      'Entertainment',
      'Health',
      'City',
      'Nature'
    ]
  },
  english_text: {
    type: String,
    required: true
  },
  spanish_translation: {
    type: String,
    required: true
  },

  imageUrl:  {
    type: String,
    required: false
  },
}, {
  timestamps: true
});

export const Reading = mongoose.model('Reading', readingSchema);