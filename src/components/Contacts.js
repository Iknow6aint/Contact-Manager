import React from 'react'
import PropTypes from 'prop-types';

export const Contacts = (props) => {

    const {name,email,number} = props
  return (
          <div className='card-body m3-3'>
         <h4>{name}</h4>
        <ul className='list-group'>
            <li className='list-group-item'> 
            email:{email}</li>
            <li className='list-group-item'>
            number:{number}</li>
        </ul>
      </div>
  )
}

    Contacts.prototype={
        name:PropTypes.string.isRequired,
        email:PropTypes.string.isRequired,
        number:PropTypes.string.isRequired
    }


