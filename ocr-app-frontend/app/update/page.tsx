// pages/update.tsx

import UpdateForm from "@/components/UpdateForm";

const UpdatePage = () => {
  const handleUpdate = (data: { id: string; [key: string]: string }) => {
    // Handle the update logic here
    console.log('Update data:', data);
    // You can send a request to the backend to update the data
  };

  return (
    <div>
      <h1>Update Data</h1>
      <UpdateForm/>
    </div>
  );
};

export default UpdatePage;
