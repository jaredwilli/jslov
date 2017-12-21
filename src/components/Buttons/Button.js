import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

/**
 * The only true button.
 */
const Button = ({ type, className, children, color, size }) => {
    const styles = {
        color,
        fontSize: Button.sizes[size]
    };

    return (
        <button
            type={type}
            className={`button ${className}`}
            style={styles}>
            {children}
        </button>
    );
};

Button.propTypes = {
    /** Button type */
    type: PropTypes.string,
    /** Button className */
    className: PropTypes.string,
    /** Button label or inner HTML */
    children: PropTypes.node,
    /** Button font color */
    color: PropTypes.string,
    /** Button size - xs, sm, md, lg - Default: md */
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
};

Button.defaultProps = {
    type: 'button',
    children: 'Submit',
    size: 'md'
};

Button.sizes = {
    xs: '9px',
    sm: '12px',
    md: '14px',
    lg: '18px',
    xl: '22px'
};

export default Button;
