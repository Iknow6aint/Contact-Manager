import React from 'react'
import PropTypes from 'prop-types';

const Head = (props) => {
    return (
        <div>
            <h1>{props.branding}</h1>
        </div>
    )
}


Head.defaultProps = {
    branding: 'Myapp'
};

Head.prototype = {
    branding: PropTypes.string.isRequired
}

export default Head