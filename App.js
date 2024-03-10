import React, { useState } from 'react';
import Profile from './Profile';
import Map from './Map';
import AdminPanel from './AdminPanel';

const App = () => {
  const [profiles, setProfiles] = useState([
    { id: 1, name: 'John Doe', description: 'Software Developer', address: 'Warje, Pune' },
  ]);

  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleSummaryClick = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <div>
      <h1>Bynry Assignment</h1>
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
