import React from 'react';
import { MdDeleteForever } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import { VscDebugRestart } from "react-icons/vsc";

import createdata from '../constantApi/CreateContext';
import { useContext } from 'react';

function Item() {

  const { data, deleteItem, refresh, edit } = useContext(createdata);
  
  function fun(id) {
    // console.log(index);
    deleteItem(id)
    console.log(id);
  
    
  }

  function ff(){
    refresh()
  }

  function show(item){
    console.log("ffffffff");
    
    console.log(item);
    edit(item)
    
  }
  

  return (
    <div className='box'>
      {data.length > 0 ? (
        <div className='box'>
          {data.map((item, index) => {
            return (
              <div key={index} className='box1'>
                <div>
                  <h3 style={{ color: 'azure', marginBottom: 10 }}>Name</h3>
                  <h2>{item.name}</h2>
                </div>
                <div>
                  <h3 style={{ color: 'azure', marginBottom: 10 }}>Price</h3>
                  <h2>₹ {item.price}</h2>
                </div>
                <div>
                  <h3 style={{ color: 'azure', marginBottom: 10 }}>Quantity</h3>
                  <h2 style={{ marginLeft: 20 }}>{item.quantity}</h2>
                </div>
                {/* how to take current box id */}
                <button onClick={() => fun(item.id)} ><MdDeleteForever /></button>
                {/* how to update current click item */}
                <button onClick={()=>show(item)}><RxUpdate /></button>
              </div>
            );
          })}
        </div>
      ) : (
        <div style={{display:'flex',alignItems:"center",justifyContent:'center',flexDirection:'column'}}>
            <h1  style={{marginTop:40}} >No Data</h1>

            <button style={{marginTop:40}} onClick={ff}><VscDebugRestart /></button>
        </div>
      )}

    </div>
  );
}

export default Item;