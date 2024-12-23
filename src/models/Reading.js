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
      'Conversations',
      'Technology',
      'Literature',
      'Work',
      'Studies',
      'Short Stories',
      'Home',
      'Travel',
      'Food',
      'Entertainment',
      'Health',
      'City',
      'Nature',
      'Irregular Verbs'
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