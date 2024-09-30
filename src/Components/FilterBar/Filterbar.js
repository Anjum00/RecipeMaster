import React, { useState ,useEffect} from 'react';
import styles from './FilterBar.module.css'; // Import the CSS file
import  dummyData from'../../data/dummyData.json';



const FilterBar = () => {
  const [activeFilter, setActiveFilter] = useState('Breakfast'); // Default to 'Breakfast'
  const [filteredItems, setFilteredItems] = useState([]);


  useEffect(() => {
    const filteredData = dummyData.filter(item => item.category === activeFilter);
    setFilteredItems(filteredData);
  }, [activeFilter]);


  const filters = ['Breakfast', 'Lunch', 'Dinner', 'Vegan', 'Dessert','Snacks','Brunch','Drinks'];

  return (
    <div className={styles.container}>
    <div className={`${styles.filterBar}`}>
      {filters.map((filter) => (
        <button
          key={filter}
          className={`${styles.filterBtn} ${activeFilter === filter ? 'active' : ''}`}
          onClick={() => setActiveFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
          <div className={`${styles.itemList}`}>
          {filteredItems.map(item => (
            <div key={item.id} className={styles.item}>
              <img src={`/images/${item.image}`} alt={item.name} className={styles.foodImage} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        </div>
  );
};

export default FilterBar;
