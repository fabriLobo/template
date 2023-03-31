import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import Input from '../common/input'
import Button from '../common/button'

const LoginForm = ({ fields, onSubmit, className = '' }) => {
  const { t } = useTranslation()
  const initFormValue = { username: 'userTest', password: '1234' }
  const [formValues, setFormValues] = useState(initFormValue)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormValues((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(formValues)
  }

  return (
    <form className={className} onSubmit={handleSubmit}>
      {fields.map((field) => (
        <Input
          key={field.name}
          name={field.name}
          label={field.label}
          type={field.type}
          value={formValues[field.name] || ''}
          onChange={handleChange}
          placeholder={field.placeholder}
          required={field.required}
          helperText={field.helperText}
        />
      ))}
      <Button
        type="submit"
        className="button-custom-class"
        testId="form-submit-btn"
      >
        <p className="login-form-label-submit-btn">
          {t('login-submit-btn-text')}
        </p>
      </Button>
    </form>
  )
}

LoginForm.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      placeholder: PropTypes.string,
      required: PropTypes.bool,
      helperText: PropTypes.string,
    }),
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
  className: PropTypes.string,
}

export default LoginForm
