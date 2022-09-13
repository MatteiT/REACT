import React, { useState } from 'react';
import items from './data';
import Categories from './Categories';
import Menu from './Menu';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];
console.log(allCategories);

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>les menus</h2>
          <div className="underline"></div>
        </div>
      </section>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </main>
  );
};

export default App;
