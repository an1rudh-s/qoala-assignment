import mongoose from 'mongoose';

const ocrSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  last_name: { type: String, required: true },
  date_of_birth: { type: String },
  date_of_issue: { type: String },
  date_of_expiry: { type: String },
  timestamp: { type: Date, default: Date.now },
  status: { type: String, enum: ['success', 'failure'], required: true },
  errorMessage: { type: String },
});

const OCR = mongoose.model('OCR', ocrSchema);

export default OCR;