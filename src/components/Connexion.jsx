import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';


const Connexion = () => {


    const [pseudo, setPseudo] = useState('')
    const [goToChat, setGoToChat] = useState(false)

    const handleChange = event => {
        setPseudo(event.target.value)
    }
    
    if(goToChat)
    {
        return <Navigate to={`/pseudo/${pseudo}`}  />
    }

    return (
        <div className='connexionBox'>
            <form action="" className='connexion' onSubmit={() => setGoToChat(true)}>
                <input 
                    type="text"
                    placeholder='Pseudo'
                    value={pseudo}
                    onChange={handleChange}
                    required 
                />
                <button type='submit'> GO </button>

            </form>
        </div>
    )
}

export default Connexion