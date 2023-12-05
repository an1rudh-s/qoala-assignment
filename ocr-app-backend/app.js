import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './db.js';
import OCR from './models/ocrModel.js';

const app = express();
const port = 3000;

app.use(bodyParser.json());

connectDB();

// Create a new OCR record
app.post('/ocr', async (req, res) => {
  const { id, name, last_name, date_of_birth, date_of_issue, date_of_expiry } = req.body;

  try {
    const ocrRecord = new OCR({
      id,
      name,
      last_name,
      date_of_birth,
      date_of_issue,
      date_of_expiry,
      status: 'success',
    });

    await ocrRecord.save();

    res.status(201).json({ message: 'OCR record created successfully', data: ocrRecord });
  } catch (error) {
    console.error('Error creating OCR record:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Retrieve OCR data
app.get('/ocr/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const ocrRecord = await OCR.findOne({ id });

    if (ocrRecord) {
      res.json({ data: ocrRecord });
    } else {
      res.status(404).json({ error: 'OCR record not found' });
    }
  } catch (error) {
    console.error('Error retrieving OCR record:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update OCR record
app.put('/ocr/:id', async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const updatedRecord = await OCR.findOneAndUpdate(
      { id },
      { $set: updateData },
      { new: true }
    );

    if (updatedRecord) {
      res.json({ message: 'OCR record updated successfully', data: updatedRecord });
    } else {
      res.status(404).json({ error: 'OCR record not found' });
    }
  } catch (error) {
    console.error('Error updating OCR record:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete OCR record
app.delete('/ocr/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedRecord = await OCR.findOneAndDelete({ id });

    if (deletedRecord) {
      res.json({ message: 'OCR record deleted successfully', data: deletedRecord });
    } else {
      res.status(404).json({ error: 'OCR record not found' });
    }
  } catch (error) {
    console.error('Error deleting OCR record:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
