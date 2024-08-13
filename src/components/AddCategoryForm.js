import React, { useState } from 'react';

function AddCategoryForm({ addCategory }) {
  const [categoryName, setCategoryName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (categoryName.trim()) {
      const newCategory = {
        id: Date.now().toString(), // Unique ID for simplicity
        name: categoryName,
        widgets: []
      };
      addCategory(newCategory);
      setCategoryName('');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add New Category</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Category Name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            required
          />
          <button type="submit">Add Category</button>
        </form>
      </div>
    </div>
  );
}

export default AddCategoryForm;
