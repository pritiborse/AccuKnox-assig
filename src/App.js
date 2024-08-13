import React, { useState } from 'react';
import { initialData } from './data';
import Dashboard from './components/Dashboard';
import AddWidgetForm from './components/AddWidgetForm';
import AddCategoryForm from './components/AddCategoryForm';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [data, setData] = useState(initialData);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddCategoryForm, setShowAddCategoryForm] = useState(false);

  const addWidget = (categoryId, widget) => {
    const updatedCategories = data.categories.map(category => {
      if (category.id === categoryId) {
        return {
          ...category,
          widgets: [...category.widgets, widget]
        };
      }
      return category;
    });
    setData({ categories: updatedCategories });
  };

  const removeWidget = (categoryId, widgetId) => {
    const updatedCategories = data.categories.map(category => {
      if (category.id === categoryId) {
        return {
          ...category,
          widgets: category.widgets.filter(widget => widget.id !== widgetId)
        };
      }
      return category;
    });
    setData({ categories: updatedCategories });
  };

  const addCategory = (category) => {
    setData(prevData => ({
      categories: [...prevData.categories, category]
    }));
    setShowAddCategoryForm(false);
  };

  const deleteCategory = (categoryId) => {
    const updatedCategories = data.categories.filter(category => category.id !== categoryId);
    setData({ categories: updatedCategories });
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = {
    categories: data.categories.map(category => ({
      ...category,
      widgets: category.widgets.filter(widget =>
        widget.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }))
  };

  return (
    <div className="App">
      <header className="navbar">
        <h1>Dynamic Dashboard</h1>
        <FontAwesomeIcon icon={faSearch} />
      </header>
      <div className="header-container">
        <div className="search-container">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input
            type="text"
            placeholder="Search widgets..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-bar"
          />
        </div>
        <button 
          onClick={() => setShowAddCategoryForm(!showAddCategoryForm)} 
          className="add-category-button">
          <FontAwesomeIcon icon={showAddCategoryForm ? faTimes : faPlus} /> 
          {showAddCategoryForm ? 'Cancel' : 'Add Category'}
        </button>
      </div>
      <Dashboard
        data={filteredData}
        removeWidget={removeWidget}
        setSelectedCategory={setSelectedCategory}
        deleteCategory={deleteCategory}
      />
      {selectedCategory && (
        <AddWidgetForm
          addWidget={addWidget}
          categoryId={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      )}
      {showAddCategoryForm && (
        <AddCategoryForm addCategory={addCategory} />
      )}
    </div>
  );
}

export default App;
