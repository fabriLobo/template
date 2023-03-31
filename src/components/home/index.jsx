import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Button from '../common/button'
import { actionsAfterLogout } from '../../utils/auth-utils'

const HomeContainer = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogOut = () => actionsAfterLogout(dispatch, navigate)

  return (
    <div className="home-container" data-testid="home-container">
      <p data-testid="home-container-text">{t('home-page-title')}</p>
      <Button testId={'home-container-button'} onClick={handleLogOut}>
        {t('logout-btn-text')}
      </Button>
    </div>
  )
}

export default HomeContainer
