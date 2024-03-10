import React, { useState } from 'react';

const AdminPanel = ({ profiles, setProfiles }) => {
  const [newProfile, setNewProfile] = useState({ name: '', description: '', address: '' });
  const handleAddProfile = () => {
    setProfiles([...profiles, { ...newProfile, id: profiles.length + 1 }]);
    setNewProfile({ name: '', description: '', address: '' });
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      <div>
        <h3>Add New Profile</h3>
        <input
          type="text"
          placeholder="Name"
          value={newProfile.name}
          onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newProfile.description}
          onChange={(e) => setNewProfile({ ...newProfile, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Address"
          value={newProfile.address}
          onChange={(e) => setNewProfile({ ...newProfile, address: e.target.value })}
        />
        <button onClick={handleAddProfile}>Add Profile</button>
      </div>
    </div>
  );
};
export default AdminPanel;
