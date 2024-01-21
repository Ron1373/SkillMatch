import React, { useState } from 'react';
import axios from 'axios';

const CreateProfileForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone_number: '',
    location: '',
    bio: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make a POST request to create a new profile
    axios.post('http://localhost:3000/profiles', formData) // Update with your backend URL
      .then(response => {
        console.log('Profile created successfully:', response.data);
        // Optionally, you can redirect or perform other actions after successful creation
      })
      .catch(error => {
        console.error('Error creating profile:', error);
      });
  };

  return (
    <div>
      <h2>Create a New Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="text" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        {/* Add other input fields for password, phone_number, location, bio, etc. */}
        {/* Example: */}
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <br />
        {/* Add more input fields based on your schema */}
        <br />
        <button type="submit">Create Profile</button>
      </form>
    </div>
  );
};

export default CreateProfileForm;