import React, { useState } from 'react';

const Settings = () => {
  const [privacyEnabled, setPrivacyEnabled] = useState(true);
  const [securityEnabled, setSecurityEnabled] = useState(true);

  const handlePrivacyToggle = () => {
    setPrivacyEnabled(!privacyEnabled);
  };

  const handleSecurityToggle = () => {
    setSecurityEnabled(!securityEnabled);
  };

  const handleFeedback = () => {
    // Implement feedback functionality here
    console.log('Opening feedback modal or redirecting to feedback page...');
  };

  const handleContactUs = () => {
    // Implement contact us functionality here
    console.log('Opening contact us modal or redirecting to contact us page...');
  };

  return (
    <div>
      <h1>Settings</h1>
      <div>
        <h2>Privacy</h2>
        <label>
          <input
            type="checkbox"
            checked={privacyEnabled}
            onChange={handlePrivacyToggle}
          />
          Enable Privacy Settings
        </label>
      </div>
      <div>
        <h2>Security</h2>
        <label>
          <input
            type="checkbox"
            checked={securityEnabled}
            onChange={handleSecurityToggle}
          />
          Enable Security Settings
        </label>
      </div>
      <div>
        <h2>Feedback & Support</h2>
        <button onClick={handleFeedback}>Give Feedback</button>
        <button onClick={handleContactUs}>Contact Us</button>
      </div>
    </div>
  );
};

export default Settings;