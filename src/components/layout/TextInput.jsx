import React from 'react'
import PropTypes from 'prop-types';

const TextInput = (
    { label,
        name,
        value,
        placeholder,
        type,
        onChange
    }
) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                name={name}
                className="form-control form-control-lg"
                placeholder={placeholder}
                value={value}
                onChange={onChange}

            />
        </div>
    )
}


export default TextInput;