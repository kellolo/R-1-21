import React,{useContext} from 'react';
import Context from '@context/context.js'


export default function Li({test}){
   
   const {chat}=useContext(Context)

   return(
      <li className="contact-details" id={test.id} onClick={()=>chat(event.target.id)}>
         <div className="contact-avatar"></div>
         {test.name}
         
      </li>
   )
}