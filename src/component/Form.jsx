import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import createdata from '../constantApi/CreateContext';
import { useContext } from 'react';


function Form() {

  const { getData, data, currentItem }=useContext(createdata)

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
 


  const notify = () => toast.success("Item Added Succesfully!");
  
  useEffect(() => {
    if (currentItem) {
      setName(currentItem.name);
      setPrice(currentItem.price);
      setQuantity(currentItem.quantity); // Corrected the typo here
      
    } else {
      // Clear form when adding a new item
      
      setName('');
      setPrice('');
      setQuantity('');
 
    }
  }, [currentItem]);

  function handleSubmit(e) {
   
    e.preventDefault();
   
    const obj = {
      name: name,
      price: price,
      quantity: quantity,
      id: data.length
    };
   
    console.log(obj);
    getData(obj);
    setName('');
    setPrice('');
    setQuantity('');
    setIsSubmitted(true)
  }

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={{ marginBottom: 15, fontSize: 20 }} htmlFor="">
            Enter Item Name:
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={{ marginBottom: 15, fontSize: 20 }} htmlFor="">
            Enter Item Price:
          </label>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            type="text"
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={{ marginBottom: 15, fontSize: 20 }} htmlFor="">
            Enter Item Quantity:
          </label>
          <input
            onChange={(e) => setQuantity(e.target.value)} // Corrected the typo here
            value={quantity}
            type="text"
          />
        </div>

        <button>{currentItem ? 'Update' : 'Submit'}</button>
      </form>
    <ToastContainer/>
    </div>
  );
}

export default Form;
