import React from 'react';
import Category from './Category';

function Dashboard({ data, removeWidget, setSelectedCategory, deleteCategory }) {
  return (
    <div className="dashboard">
      {data.categories.map(category => (
        <Category
          key={category.id}
          category={category}
          removeWidget={removeWidget}
          setSelectedCategory={setSelectedCategory}
          deleteCategory={deleteCategory} // Pass deleteCategory function
        />
      ))}
    </div>
  );
}

export default Dashboard;
