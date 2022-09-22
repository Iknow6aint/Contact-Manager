import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';


const TextInput = (
    { label,
        name,
        value,
        placeholder,
        type,
        onChange,
        error
    }
) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                name={name}
                className={classNames("form-control form-control-lg", {
                    'is-invalid': error
                })}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {error && <div className='invalid-feeback'>{error}</div>}
        </div>
    )
}


export default TextInput;