import React, { useState } from 'react'

const Formulaire = ({pseudo, addMessages, length}) => {

    const [message, setMessage] = useState('')
    const [long, setLong] = useState(length)
    
   
    const handleChange = (e) => {
        setMessage(e.target.value)
        setLong(length - e.target.value.length)
    }
    const createMessage = () => {
        const texte = {
            pseudo,
            message: message
        }

        addMessages(texte)
        setMessage('')
        setLong(length)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        createMessage()
    }
    const handleKeyUp = (e) => {
        e.key === 'Enter' && createMessage()
    }

    return (
            <form
                className='form'
                onSubmit={handleSubmit}
            >
                <textarea 
                    name="" 
                    id="" 
                    maxLength={length}
                    value={message}
                    onChange={handleChange}
                    onKeyUp={handleKeyUp}
                    required
                />
                <div className="info">
                    {long}
                </div>
                <button type="submit">
                    Envoyer !
                </button>
            </form>
    )
}

export default Formulaire