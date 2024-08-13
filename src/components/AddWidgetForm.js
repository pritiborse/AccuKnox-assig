import React, { useState } from 'react';
import './AddWidgetForm.css';

function AddWidgetForm({ addWidget, categoryId, setSelectedCategory }) {
  const [widgetName, setWidgetName] = useState('');
  const [widgetDescription, setWidgetDescription] = useState('');

  const handleAddWidget = () => {
    if (widgetName && widgetDescription) {
      const newWidget = {
        id: Date.now(),
        name: widgetName,
        description: widgetDescription
      };
      addWidget(categoryId, newWidget);
      setSelectedCategory(null);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add Widget</h2>
        <input
          type="text"
          placeholder="Widget Name"
          value={widgetName}
          onChange={(e) => setWidgetName(e.target.value)}
        />
        <textarea
          placeholder="Widget Description"
          value={widgetDescription}
          onChange={(e) => setWidgetDescription(e.target.value)}
        ></textarea>
        <button onClick={handleAddWidget}>Add Widget</button>
        <button onClick={() => setSelectedCategory(null)}>Close</button>
      </div>
    </div>
  );
}

export default AddWidgetForm;
