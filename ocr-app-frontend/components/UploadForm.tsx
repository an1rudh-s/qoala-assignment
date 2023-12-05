"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const UploadForm = () => {
  const [image, setImage] = useState<File | null>(null);
  const router = useRouter();

  const handleImageUpload = async () => {
    // Implement your logic here to handle the image upload and Google OCR API
    // Example: Send the file to your backend for processing

    // Redirect to another page after processing (replace '/success' with your desired route)
    router.push('/success');
  };

  return (
    <div className={`container mx-auto `}>

      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Upload</h1>

        {/* Upload Button */}
        <input
          type="file"
          accept=".png, .jpg, .jpeg"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
        />

        <button
          onClick={handleImageUpload}
          disabled={!image}
          className={`bg-blue-500 text-white py-2 px-4 mt-4 ${
            image ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'
          }`}
        >
          Upload Image
        </button>
      </div>
    </div>
  );
};

export default UploadForm;
