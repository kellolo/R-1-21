import React,{useState} from 'react';
import MessageList from '@containers/MessageList';
import MsgInput from '@components/MsgInput';
import Context from '@context/context.js';
import Modal from '@containers/Modal';

import './style.scss';

export default function App() {
    
    const [modal, setModal]=useState(true);

    let masSms=[
        [{name:"Luke", text:"I'm Luke and who are you?",id:81111111111}],
        [{name:"Yoda", text:"Fear is the path to the Dark Side.!",id:87777777777}],
        [{name:"Darth", text:"Go to the dark side!",id:82222222222}],
        [{name:"Obi-Wan", text:"You're a Sith?",id:83333333333}],
        [{name:"Leiy", text:"Help me, Obi-Wan Kenobi. You're my only hope.",id:84444444444}],
    ];
    
    let mas=[];
    const [mass, setMass]=React.useState(mas);
    
    let masContacts=[{name:"Luke",id:"81111111111"},
                    {name:"Yoda",id:"87777777777"},
                    {name:"Darth",id:"82222222222"},
                    {name:"Obi-Wan",id:"83333333333"},
                    {name:"Leiy",id:"84444444444"}
                    ];

    
    function onCreateXXX(title,name="Doe"){
        setMass(mass.concat([{
            text:title,
            id:Date.now(),
            name
        }]));
    }
    
    function chat(id){
        
       masSms.map(el=>{
            
            if(el[0].id===+id){
                mas=[];
                mas.push(...el);
                setMass(mas);
                console.log(mas);
                setModal(false);
                return;
            }
        })
    }
    
    function back(){
       return setModal(true);
    }
    
    
    return (
        <Context.Provider value={{onCreateXXX,chat}}>
    <div className="home">
        {modal? (<Modal y={masContacts}/>):(<div className="message-page"><MessageList x={mass}  z={{back}}/><MsgInput  /></div>) }
        
    </div>
    </Context.Provider>)
}
