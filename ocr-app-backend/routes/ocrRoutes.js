import express from 'express';
import { createOCRRecord, getOCRRecord, updateOCRRecord, deleteOCRRecord } from '../controllers/ocrController.js';

const router = express.Router();

// Create a new OCR record
router.post('/', createOCRRecord);

// Retrieve OCR data
router.get('/:identification_number', getOCRRecord);

// Update OCR record
router.put('/:identification_number', updateOCRRecord);

// Delete OCR record
router.delete('/:identification_number', deleteOCRRecord);

export default router;
