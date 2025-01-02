import React, { useState } from 'react'

const Data1 = () => {
    
    const [newData , setData] = useState([]);

    async function getData(){
        try{
            const response = await fetch('http://154.210.160.217/api/addupdatemonumentmaster');
            const data = await response.json();
        setData(data);
        }
        catch(e){

        }
        
    }
    getData();
    console.log(newData);
  return (
    <div>
    </div>
  )
}

export default Data1
