import React from 'react'
import { PropTypes } from 'prop-types';


export const InLineError = (props) => {
    return (
        <div className = "inLineError">
            {props.message}
        </div>
    )
}

InLineError.propTypes = {
    message: PropTypes.string.isRequired
}

