// components/DeleteConfirmation.tsx

interface DeleteConfirmationProps {
  onDelete: () => void;
  onCancel: () => void;
}

const DeleteConfirmation: React.FC<DeleteConfirmationProps> = ({ onDelete, onCancel }) => {

  return (
    <div
      className={`fixed top-0 left-0 h-screen w-screen flex justify-center items-center}`}
    >
      <div className="bg-white p-4 rounded shadow-lg">
        <p className="text-red-500 text-lg font-semibold">
          Are you sure you want to delete this record?
        </p>

        <div className="flex space-x-4 mt-4">
          <button onClick={onDelete} className="bg-red-500 text-white py-2 px-4">
            Delete
          </button>
          <button onClick={onCancel} className="bg-gray-500 text-white py-2 px-4">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
