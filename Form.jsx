import React, { useEffect, useState } from 'react'
import { use } from 'react';
import GetAllData from './GetAllData';

const Form = () => {
    const [name , setName] = useState();
    const [destination , setDestination] = useState();
    const [tranferType , setTransferType ] = useState();
    const [weekendDay , setWeekendDay] = useState();
    const [falseUnder , setFalseUnder] = useState([
        {id:1 , name:'ASI'},
        {id:2 , name:'UNESCO'},
        {id:3 , name:'Private ONED'},
    ]);

    const [status , setStatus] = useState(false);
    const [quotation , setQuotation] = useState(false);
    const [proposal, setProposal] = useState(false);

    function sendData(){
        console.log(name);

    }

    function getName(event){
        setName(event.target.value);
        
        
    }
    function getDestination(event){
        setDestination(event.target.value);
        

    }

    function getTransferType(event){
        console.log(event)
        setTransferType(event.target.value);
        console.log(tranferType);
       

    }

    function getDays(event){
        setWeekendDay(event.target.value);
        
    }
    function getfalseunder(event){
        setWeekendDay(event.target.value);
        
    }
  return (
    <div className='form-page'>
        <form action="">
            <div className='header-1'>
               
                    <h1>Add Monument </h1>
                    <div className='btn'>
                    <button > Back </button>
                    <button onClick={sendData}> Submit </button>
                    </div>
               
            </div>

            <div className='input-section'>
            
                
                <label for="name">Monument Name<span>*</span> </label> <br />
                <input type="text" name="" id="" onChange={getName} placeholder='Name' required/> 
                
               
               
                
                <label>Destination <span>*</span></label>
                
                <select name="" id="" placeholder = "" onChange={getDestination}>
                    <option value="">Select</option>

                    <option value="Mumbai">Mumbai</option>
                </select>
              

                

               
                    <label>Transfer Type</label> 
                    <select onChange={getTransferType}>
                        
                        <option value="1">Visa</option>
                        <option value = "2">UPI</option>
                        <option value ="3">MaterCard</option>
                        
                    </select>
               
               

                <label>Weekend Days</label>
                <select name="" id="" placeholder = "" onChange={getDays}>
                    <option value="1">Select</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday"></option>
                </select>
                
             
                    <label> False Under </label>
                    
                    <input onChange={getfalseunder} type="Radio" name="ASI" placeholder='ASI' value="ASI"/>
                    <label>ASI</label>

                    <input type="Radio" name='UNISCO' placeholder='ASI' value="UNESCO"/>
                    <label>UNISCO</label>

                    <input type="Radio" name='Private ONED' placeholder='ASI' value="ASI"/>
                    <label>Private ONED</label>

                    <label> ADD Image</label>
                    <input type="file" placeholder='Image'/>


                <label>Status <span>*</span></label>
                <select name="" id="" placeholder = "">
                    <option value="Active">Active</option>
                </select>


                <label> Set Default for Question <span>*</span></label>
               
                <input type="checkbox"  name="" id="1" placeholder='Yes' value="Yes" />
                <label>Yes</label>
                <input type="checkbox" value="NO" name="" id="2" placeholder='No' />
                <label>NO</label>

                <br />
                <label> Set Default for Proposal <span>*</span></label>
              
                <input type="checkbox" name="" id="" placeholder='Yes'/>
                <label>Yes</label>
                <input type="checkbox" name="" id="" placeholder='No'/>
                <label>NO</label>

                <label>Description</label>
                <textarea name="" id="" placeholder='Description' required></textarea>
            </div>
        </form>


        <GetAllData data={name + sendData}/>
    </div>
    
  )
}

export default Form
