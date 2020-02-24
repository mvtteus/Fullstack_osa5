import React from 'react'

const Message = ({ message }) => {
  if (message === null) {
    return null
  }
  return (
    <h2 className='error'>
      {message}
    </h2>
  )
}

export default Message