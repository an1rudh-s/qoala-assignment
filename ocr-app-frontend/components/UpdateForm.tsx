'use client'

import { useState } from 'react';

const UpdateForm = () => {
  const [id, setId] = useState('');
  const [showEditForm, setShowEditForm] = useState(false);
  const [newDetails, setNewDetails] = useState({
    name: '',
    last_name: '',
    date_of_issue: '',
    date_of_expiry: '',
    date_of_birth: '',
    // Add other fields as needed
  });

  const handleVerification = () => {
    // Perform verification logic here based on the entered ID
    // For simplicity, assuming ID is correct, you may need to replace this with actual verification logic
    setShowEditForm(true);

    // Fetch the user details based on the ID from the backend and populate the form
    // You may need to replace this with your actual data fetching logic
    const userFromDatabase = {
      name: 'John',
      last_name: 'Doe',
      date_of_issue: '01/01/2022',
      date_of_expiry: '01/01/2032',
      date_of_birth: '01/01/1990',
      // Add other fields as needed
    };

    setNewDetails(userFromDatabase);
  };

  const handleUpdate = () => {
    // Assuming onUpdate is a function passed as a prop to handle the update process
    // onUpdate({ id, ...newDetails });

    // Reset the form
    setId('');
    setShowEditForm(false);
    setNewDetails({
      name: '',
      last_name: '',
      date_of_issue: '',
      date_of_expiry: '',
      date_of_birth: '',
      // Add other fields as needed
    });
  };

  return (
    <div className="my-8 p-4 border border-gray-300 shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Update Form</h2>
      {!showEditForm ? (
        // Step 1: Enter ID for verification
        <div className="flex items-center space-x-4">
          <label className="font-semibold">ID:</label>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="border border-gray-400 p-2 rounded-md"
          />
          <button
            type="button"
            onClick={handleVerification}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:opacity-75 transition duration-300"
          >
            Update my data
          </button>
        </div>
      ) : (
        // Step 2: Edit and Update Details
        <form className="mt-4 space-y-4">
          {/* Fields for updating details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label className="font-semibold block mb-2">Name:</label>
                <input
                type="text"
                value={newDetails.name}
                onChange={(e) => setNewDetails({ ...newDetails, name: e.target.value })}
                className="border border-gray-400 p-2 rounded-md w-full"
                />
            </div>
            <div>
                <label className="font-semibold block mb-2">Last Name:</label>
                <input
                type="text"
                value={newDetails.last_name}
                onChange={(e) => setNewDetails({ ...newDetails, last_name: e.target.value })}
                className="border border-gray-400 p-2 rounded-md w-full"
                />
            </div>
            <div>
                <label className="font-semibold block mb-2">Date of Issue:</label>
                <input
                type="text"
                value={newDetails.date_of_issue}
                onChange={(e) => setNewDetails({ ...newDetails, date_of_issue: e.target.value })}
                className="border border-gray-400 p-2 rounded-md w-full"
                />
            </div>
            <div>
                <label className="font-semibold block mb-2">Date of Expiry:</label>
                <input
                type="text"
                value={newDetails.date_of_expiry}
                onChange={(e) => setNewDetails({ ...newDetails, date_of_expiry: e.target.value })}
                className="border border-gray-400 p-2 rounded-md w-full"
                />
            </div>
            <div>
                <label className="font-semibold block mb-2">Date of Birth:</label>
                <input
                type="text"
                value={newDetails.date_of_birth}
                onChange={(e) => setNewDetails({ ...newDetails, date_of_birth: e.target.value })}
                className="border border-gray-400 p-2 rounded-md w-full"
                />
            </div>
          </div>

          <div>
            <button
              type="button"
              onClick={handleUpdate}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:opacity-75 transition duration-300"
            >
              Update
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default UpdateForm;
