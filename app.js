import React from 'react';
import ProfileList from './ProfileList';
import CreateProfileForm from './CreateProfileForm';

const App = () => {
  return (
    <div>
      <h1>React App</h1>
      <ProfileList />
      <CreateProfileForm />
    </div>
  );
};

export default App;