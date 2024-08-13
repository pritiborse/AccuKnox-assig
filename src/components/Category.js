import React from 'react';
import './Category.css'; // Import the updated CSS file

function Category({ category, removeWidget, setSelectedCategory, deleteCategory }) {
  return (
    <div className="category">
      <div className="category-header">
        <h2>{category.name}</h2>
        <button
          className="delete-category-button"
          onClick={() => deleteCategory(category.id)}
        >
          Delete 
        </button>
      </div>
      <div className="category-widgets">
        {category.widgets.map(widget => (
          <div key={widget.id} className="widget">
            <div className="widget-title">{widget.name}</div>
            <div className="widget-description">{widget.description}</div>
            <button
              className="remove-widget-button"
              onClick={() => removeWidget(category.id, widget.id)}
            >
              Remove Widget
            </button>
          </div>
        ))}
      </div>
      <button
        className="add-widget-button"
        onClick={() => setSelectedCategory(category.id)}
      >
        Add Widget
      </button>
    </div>
  );
}

export default Category;
