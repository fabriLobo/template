import React from 'react'
import PropTypes from 'prop-types'

const Button = ({
  onClick,
  className,
  disabled,
  type = 'button',
  children,
  testId = '',
}) => {
  const classes = `custom-button ${className ? className : ''}`

  return (
    <button
      data-testid={testId}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  testId: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
}

Button.defaultProps = {
  type: 'button',
}

export default Button
