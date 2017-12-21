import React from 'react';
import PropTypes from 'prop-types';

import './CloseButton.css';

const CloseButton = ({ type, style, text, icon, className, onClick, ...props }) => {

    return (
        <button {...props}
            style={style}
            aria-label={text}
            className={`close-button ${className}`}
            onClick={event => onClick(event)}>
            {(!icon && !text) &&
                <span aria-hidden="true">&times;</span>
            }
            { icon && <i className={`fa fa-${icon}`} /> }
            { text && <span aria-hidden="true">{ text }</span> }
        </button>
    );
};

CloseButton.propTypes = {
    /** CloseButton type */
    type: PropTypes.string,
    /** CloseButton className */
    className: PropTypes.string,
    /** CloseButton icon */
    icon: PropTypes.string,
    /** CloseButton text */
    children: PropTypes.string,
    /** CloseButton style */
    style: PropTypes.object,
    /** CloseButton click handler */
    onClick: PropTypes.func.isRequired
};

export default CloseButton;
