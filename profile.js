import React from 'react';
const Profile = ({ profile, onSummaryClick }) => {
  return (
    <div className="profile-card">
      <img src={`url_to_image/${profile.id}.jpg`} alt={profile.name} />
      <h2>{profile.name}</h2>
      <p>{profile.description}</p>
      <button onClick={onSummaryClick}>Summary</button>
    </div>
  );
};
export default Profile;
