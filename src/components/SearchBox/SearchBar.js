import React, {useState} from 'react';

const Searchbar = ({dishes, setDishes, activeDishes}) => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    setDishes(dishes.filter(i => {
      return i.title.toLowerCase().match(e.target.value.toLowerCase());
    }))
  }

  return (
    <div className='search-div'>
      <input
        className='search-bar'
        type='text'
        placeholder='Search recieps'
        onChange={handleChange}
        value={input}
      />

      {/*
      {activeDishes.map(dish => {
        return(
          <div key={dish.title}>
            <ul>
              <li>{dish.title}</li>
            </ul>
          </div>
        )
      })}
      */}
    </div>
  )
};

export default Searchbar;
