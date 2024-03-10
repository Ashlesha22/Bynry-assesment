import React from 'react';
import Map from './Map';
const Summary = ({ profile, onClose }) => {
  return (
    <div className="summary-modal">
      <h3>Summary for {profile.name}</h3>
      <Map profile={profile} />
      <button onClick={onClose}>Close</button>
    </div>
  );
};
export default Summary;
