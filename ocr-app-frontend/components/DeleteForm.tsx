// components/DeleteForm.tsx
import { useState } from 'react';
import Navbar from './Navbar';
import DeleteConfirmation from './DeleteConfirmation';

const DeleteForm = () => {
  const [idToDelete, setIdToDelete] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDelete = () => {
    // Implement your logic here to handle the delete
  };

  const handleCancel = () => {
    setShowConfirmation(false);
  };

  return (
    <div className={`container mx-auto}`}>
      <Navbar />

      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Delete</h1>

        {/* ID Input */}
        <input
          type="text"
          placeholder="Enter ID to Delete"
          value={idToDelete}
          onChange={(e) => setIdToDelete(e.target.value)}
        />

        {/* Delete Button */}
        <button
          onClick={() => setShowConfirmation(true)}
          className="bg-red-500 text-white py-2 px-4 mt-4"
        >
          Delete Data
        </button>

        {/* Delete Confirmation Modal */}
        {showConfirmation && (
          <DeleteConfirmation onDelete={handleDelete} onCancel={handleCancel} />
        )}
      </div>
    </div>
  );
};

export default DeleteForm;
