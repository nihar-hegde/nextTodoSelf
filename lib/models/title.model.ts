import mongoose from 'mongoose';

const titleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100, // You can adjust the maximum length as needed
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Title =mongoose.models.Title || mongoose.model('Title', titleSchema);

export default Title;
