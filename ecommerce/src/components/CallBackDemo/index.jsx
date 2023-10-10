import React, { useState, useCallback } from 'react';

// Item component that receives a toggle function and an 'isActive' prop
const Item = React.memo(({ item, isActive, toggleActive }) => {
    console.log(`Rendering: ${item}`);
    return (
        <div
            onClick={() => {
                toggleActive(item)
            }}
            style={{
                background: isActive ? 'lightblue' :
                    'transparent', cursor: 'pointer'
            }}
        >
            {item}
        </div>
    );
});

const ItemList = () => {
    const [activeItem, setActiveItem] = useState(null);

    const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

      const toggleActive = useCallback((item) => {
        setActiveItem(prevItem => (prevItem === item ? null : item));
      }, []);
    // const toggleActive = (item) => {
    //     setActiveItem(prevItem => (prevItem === item ? null : item));
    // };

    return (
        <div>
            {items.map(item => (
                <Item
                    key={item}
                    item={item}
                    isActive={item === activeItem}
                    toggleActive={toggleActive}
                />
            ))}
        </div>
    );
}

export default ItemList;
