import OCR from '../models/ocrModel.js';

// Create a new OCR record
export const createOCRRecord = async (req, res) => {
  const { identification_number, name, last_name, date_of_birth, date_of_issue, date_of_expiry } = req.body;

  try {
    const ocrRecord = new OCR({
      identification_number,
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
};

// Retrieve OCR data
export const getOCRRecord = async (req, res) => {
  const { identification_number } = req.params;

  try {
    const ocrRecord = await OCR.findOne({ identification_number });

    if (ocrRecord) {
      res.json({ data: ocrRecord });
    } else {
      res.status(404).json({ error: 'OCR record not found' });
    }
  } catch (error) {
    console.error('Error retrieving OCR record:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update OCR record
export const updateOCRRecord = async (req, res) => {
  const { identification_number } = req.params;
  const updateData = req.body;

  try {
    const updatedRecord = await OCR.findOneAndUpdate(
      { identification_number },
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
};

// Delete OCR record
export const deleteOCRRecord = async (req, res) => {
  const { identification_number } = req.params;

  try {
    const deletedRecord = await OCR.findOneAndDelete({ identification_number });

    if (deletedRecord) {
      res.json({ message: 'OCR record deleted successfully', data: deletedRecord });
    } else {
      res.status(404).json({ error: 'OCR record not found' });
    }
  } catch (error) {
    console.error('Error deleting OCR record:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
