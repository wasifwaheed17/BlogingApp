import React from 'react';
import SignUpForm from './SignUpForm.js'; // Assuming both files are in the same directory

export default function ParentComponent() {
  const handleFormSubmit = (firstName, lastName, email, password) => {
    // Your form submission logic here
    console.log('Form submitted:', firstName, lastName, email, password);
  };

  return (
    <div>
      {/* Pass the handleFormSubmit function as a prop */}
      <SignUpForm onFormSubmit={handleFormSubmit} signin={false} />
      {/* Other content */}
    </div>
  );
}
