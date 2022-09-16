import React from 'react'
import PropTypes from 'prop-types';

export const Contacts = (props) => {

    const {name,email,number} = props
  return (
          <div>
         <h4>{name}</h4>
        <ul>
            <li> email:{email}</li>
            <li>number:{number}</li>
        </ul>
      </div>
  )
}

    Contacts.prototype={
        name:PropTypes.string.isRequired,
        email:PropTypes.string.isRequired,
        number:PropTypes.string.isRequired
    }


