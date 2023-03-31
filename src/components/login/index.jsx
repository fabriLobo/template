import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import LoginForm from './LoginForm'
import { loginSubmit, actionsAfterLogin } from '../../utils/auth-utils'

const LoginContainer = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (formValues) => {
    loginSubmit(formValues).then((res) => {
      res && actionsAfterLogin(dispatch, navigate)
    })
  }

  return (
    <div className="login-container">
      <p className="login-title">{t('login-title')}</p>
      <LoginForm
        fields={[
          {
            name: 'username',
            label: t('login-submit-form-username'),
            type: 'text',
          },
          {
            name: 'password',
            label: t('login-submit-form-password'),
            type: 'password',
            helperText: t('login-submit-form-helper-text'),
          },
        ]}
        onSubmit={handleSubmit}
      />
    </div>
  )
}

export default LoginContainer
