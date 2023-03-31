import React from 'react'
import PropTypes from 'prop-types'

const Input = ({
  name = '',
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  required,
  helperText,
  inputCustomStyles,
}) => {
  const inputId = `${name}-input`
  return (
    <div className="custom-input" data-testid="custom-input-container">
      {label && (
        <label data-testid="custom-input-label" htmlFor={inputId}>
          {label}
        </label>
      )}
      <input
        data-testid="custom-input"
        className={inputCustomStyles ? inputCustomStyles : ''}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        id={inputId}
      />
      {helperText && <p data-testid="custom-input-helper-text">{helperText}</p>}
    </div>
  )
}

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  helperText: PropTypes.string,
  inputCustomStyles: PropTypes.string,
}

export default Input
