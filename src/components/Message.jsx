import React from 'react'

const Message = ({message,pseudo, isUser}) => {
    
    if(isUser(pseudo))
    {
        return (
            <>
            <p className='user-message'>
                {/* <sup><span className='pseudo'>{pseudo}</span></sup>&nbsp; */}
                {message} 
            </p>
            
            
            </>
            
        )
    }
    else
    {
        return (
            <p className='not-user-message'>
                <sup><span className='pseudo'>{pseudo}</span></sup> &nbsp;
                {message} 
            </p>
        )
    }
    
}

export default Message