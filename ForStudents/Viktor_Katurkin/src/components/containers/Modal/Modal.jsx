import React from 'react';
import Ul from '@components/Ul'



export default function Modal({y}){
   console.log(y);
   
   
   return(
      <div className="modal-container">
         <div className="modal-header">
           <button className="btn-menu">menu</button>
            <span>ChatWars</span>
         </div>
         
         <Ul x={y}/>
      </div>
   )
}
