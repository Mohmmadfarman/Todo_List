import { useState } from 'react';
import './App.css';
import Item from './component/Item';
import Form from './component/Form';
import createdata from './constantApi/CreateContext.js'

import data4 from './data/Data.jsx';

function App() {

  const [data, setData] = useState(data4);

  console.log(data);
  // 
  const [currentItem, setCurrentItem] = useState(null);

  // Add item
  function getData(item) {
    if (currentItem) {
      // If currentItem exists, update the existing item
      const updatedData = data.map((d) => 
        d.id === currentItem.id ? item : d
      );
      setData(updatedData);
      setCurrentItem(null);  // Reset currentItem after update
    } else {
      // Otherwise, add new item
      setData((prevData) => [...prevData, item]);
    }
  }

  // Delete item
  function deleteItem(idToDelete) {
    console.log("Deleting item with id:", idToDelete);
    const updatedData = data.filter((item) => item.id !== idToDelete);
    setData(updatedData);
  }

  // Refresh 
  function refresh() {
    setData(data4); // Resets the state to its current value (no change)
  }

  // Edit
function edit(ed){
 setCurrentItem(ed)

}

// update edit functio



  return (
    <createdata.Provider value={{ data, deleteItem, refresh, edit ,getData,currentItem}}>
    <div className='first'>
      <h1 className='ss' >To-Do-List</h1>
      {/*  */}
      <Form  />
      <Item  />
    </div>
    </createdata.Provider> );
}

export default App;
