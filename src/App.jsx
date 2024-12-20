import React, { Component, useEffect, useState, createRef } from "react"
import Formulaire from "./components/Formulaire"
import Message from "./components/Message"
import { useParams } from "react-router-dom"
import { ref, onValue, set } from "firebase/database";
import { database } from "./config/firebase"; 
import { CSSTransition, TransitionGroup } from "react-transition-group";
const App = () => {
  let p = useParams();
  const[state, setState] = useState({
    messages:{
    },
    pseudo: p.pseudo
  })
  console.log(state.pseudo);

  useEffect(() => {
    // Référence à la base de données pour écouter les messages
    const stateRef = ref(database, '/');
    onValue(stateRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        console.log("dataMessages",data.messages);
        console.log("dataPseudo",data.pseudo);
        data.pseudo = p.pseudo;
        // Mettre à jour le state avec les messages récupérés
        setState(data);// On suppose que chaque message est un objet
      }
    });

    // Nettoyage à la destruction du composant
    return () => {
      // Ici, tu peux arrêter l'écoute si nécessaire
    };
  }, []);

  const messageRef = createRef();

  useEffect(() => {
      const ref = messageRef.current;
      ref.scrollTop = ref.scrollHeight
  },[messageRef])

  const addMessages = (message) => {
    const messages = { ...state.messages }
    messages[`message-${Date.now()}`] = message
    // console.log(messages)
    Object
    .keys(messages)
    .slice(0, -10)
    .forEach(key => {
      delete messages[key]
    })
    
    setState( { ...state,
      
                messages,
                }  )
    
 const messagesRef = ref(database, "/");
    // const newMessageId = `message-${Date.now()}`;
    set(messagesRef, {
      ...state,
      messages, // Ajouter le nouveau message
      pseudo: p.pseudo
    });                   

  }
  const isUser = (ps) => ps === p.pseudo;
  const messages = Object
    .keys(state.messages)
    .map(key => (
      <CSSTransition
        timeout={200}
        classNames='fade'
        key={key}>
        <Message
          
          isUser={isUser}
          message = {(state.messages[key]!=null)?state.messages[key].message:null}
          pseudo = {(state.messages[key]!=null)?state.messages[key].pseudo:null}
        />
      </CSSTransition>
    ))

  return (
    <div className="box">
      <h2>Exercice de ChatBox</h2>
      <div className="boxMessages">
        <div className="messages" ref={messageRef}>
          <TransitionGroup className="message">
            { messages }
          </TransitionGroup>
        </div>
      </div>
      <Formulaire
        length={140}
        pseudo= {state.pseudo}
        addMessages={addMessages}
      />
    </div>
  )
}

export default App
