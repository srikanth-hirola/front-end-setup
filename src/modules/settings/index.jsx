// Settings.js
import React, { useState } from 'react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('departments'); // Default active tab

  // Function to render content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'departments':
        return <div>Departments Content</div>; // Replace with your component
      case 'companySetup':
        return <div>Company Setup Content</div>; // Replace with your component
      case 'appointmentTypes':
        return <div>Appointment Types Content</div>; // Replace with your component
      case 'locations':
        return <div>Locations Content</div>; // Replace with your component
      case 'others':
        return <div>Others Content</div>; // Replace with your component
      default:
        return <div>Departments Content</div>;
    }
  };

  return (
    <div className="custom-tabs">
      <div className="tab-buttons">
        <button onClick={() => setActiveTab('departments')} className={activeTab === 'departments' ? 'active' : ''}>
          Departments
        </button>
        <button onClick={() => setActiveTab('companySetup')} className={activeTab === 'companySetup' ? 'active' : ''}>
          Company Setup
        </button>
        <button onClick={() => setActiveTab('appointmentTypes')} className={activeTab === 'appointmentTypes' ? 'active' : ''}>
          Appointment Types
        </button>
        <button onClick={() => setActiveTab('locations')} className={activeTab === 'locations' ? 'active' : ''}>
          Locations
        </button>
        <button onClick={() => setActiveTab('others')} className={activeTab === 'others' ? 'active' : ''}>
          Others
        </button>
      </div>
      <div className="tab-content">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Settings;
