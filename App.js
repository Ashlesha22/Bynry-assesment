import React, { useState } from 'react';
import Profile from './Profile';
import Map from './Map';
import AdminPanel from './AdminPanel';

const App = () => {
  const [profiles, setProfiles] = useState([
    { id: 1, name: 'John Doe', description: 'Software Developer', address: '123 Main St, City' },
  ]);

  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleSummaryClick = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <div>
      <h1>Profile Explorer</h1>
      <div className="profiles-container">
        {profiles.map((profile) => (
          <Profile key={profile.id} profile={profile} onSummaryClick={() => handleSummaryClick(profile)} />
        ))}
      </div>
      {selectedProfile && <Map profile={selectedProfile} />}
      <AdminPanel profiles={profiles} setProfiles={setProfiles} />
    </div>
  );
};

export default App;
