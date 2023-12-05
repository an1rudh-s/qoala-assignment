import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">About the Thai ID OCR Project</h1>
      <p className="mb-4">
        The Thai ID OCR Project is an assignment that involves developing an application capable of Optical Character Recognition (OCR) to analyze Thai ID cards and extract relevant data. The project integrates with the Google Vision API for OCR processing and parses the response to interpret the OCR results, returning the final data in JSON format.
      </p>
      <h2 className="text-2xl font-bold mb-2">Task Overview</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>OCR Processing using Google Vision API for Thai ID cards.</li>
        <li>Data Extraction and Structuring from OCR results.</li>
        <li>User Interface for uploading Thai ID card images, displaying JSON output, and listing OCR operations.</li>
        <li>Database Integration with CRUD API for creating, updating, retrieving, and deleting OCR records.</li>
      </ul>
      <h2 className="text-2xl font-bold mb-2">Requirements</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Ensure accurate OCR reading of text from different Thai ID cards.</li>
        <li>Extract key information such as ID number, name, last name, date of birth, date of issue, and date of expiry.</li>
        <li>User-friendly UI for uploading images, displaying JSON output, and filtering OCR history.</li>
        <li>Use any database of your preference for storing OCR data.</li>
      </ul>
      <h2 className="text-2xl font-bold mb-2">REST API Endpoints</h2>
      <ul className="list-disc ml-6 mb-4">
        <li><strong>Create a New OCR Record:</strong> API endpoint to create a new record with OCR results.</li>
        <li><strong>Update Existing OCR Data:</strong> API endpoint to update OCR records in the database.</li>
        <li><strong>Retrieve and Display OCR Data:</strong> API endpoint to fetch and display OCR data with filtering options.</li>
        <li><strong>Delete OCR Records:</strong> API endpoint to delete OCR records from the database.</li>
      </ul>
      <h2 className="text-2xl font-bold mb-2">Submission and Evaluation</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Submit your project on GitHub with detailed README instructions.</li>
        <li>Evaluation based on accuracy, robustness, API design, usability, advanced features, and code quality.</li>
      </ul>
      <p>For detailed information on the task, visit the <Link href="https://gist.github.com/vivek12345/beb45db969c0d8ac26d1e2a6a835c3c6" className="text-blue-500">official task page</Link></p>
      <p>GitHub Repository: <Link href="https://github.com/an1rudh-s" className="text-blue-500">GitHub Repo</Link></p>
    </div>
  );
};

export default AboutPage;
