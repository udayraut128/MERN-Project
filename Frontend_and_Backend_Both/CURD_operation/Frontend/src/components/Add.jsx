import React from 'react';
import AddUser from './AddUser';

const Add = () => {
  const handleUserAdded = () => {
    console.log('User added');
    // Optionally navigate or update UI
  };

  return (
    <div>
      <AddUser onUserAdded={handleUserAdded} />
    </div>
  );
};

export default Add;
