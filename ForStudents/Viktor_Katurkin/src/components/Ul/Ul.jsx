import React from 'react';
import Li from '@components/Li'

export default function Ul({x}){
   console.log(x);
   return(
      <ul>
         {x.map(el=>{
            return(
               <Li key={el.id}
                   test={el}
               />
            )
         })}
      </ul>
      
   )
}