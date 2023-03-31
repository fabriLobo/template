import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { getAuth } from '../../redux/selectors'
import Drawer from '../drawer/index'
import LanguageSelect from '../languageSelect'
import { navLinkStyles } from '../../utils/layout-utils'
import { login } from '../../redux/actions/authentication'
import { getAuthTokenLocalStorage } from '../../utils/auth-utils'
import LoginPageContainer from '../../pages/LoginPageContainer'
import PostsPageContainer from '../../pages/PostsPageContainer'
import HomePageContainer from '../../pages/HomePageContainer'
import TodoPageContainer from '../../pages/TodoPageContainer'
import TodoWithRecoilPageContainer from '../../pages/TodoWithRecoilPageContainer'

const Layout = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const auth = useSelector((state) => getAuth(state))

  useEffect(() => {
    const authToken = getAuthTokenLocalStorage()
    if (authToken) {
      dispatch(login())
    }
  }, [])

  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleDrawerOpen = () => setDrawerOpen(true)
  const handleDrawerClose = () => setDrawerOpen(false)

  return (
    <BrowserRouter>
      <div className="container">
        <header className="header">
          <button
            className="menu-button"
            data-testid="menu-button"
            onClick={handleDrawerOpen}
          >
            <FaBars />
          </button>
          <LanguageSelect />
          <Drawer open={drawerOpen} onClose={handleDrawerClose}>
            <ul>
              <NavLink to="/login" style={navLinkStyles}>
                {t('menu-text-login')}
              </NavLink>
              <NavLink to="/posts" style={navLinkStyles}>
                {t('menu-text-fetch')}
              </NavLink>
              <NavLink to="/todo" style={navLinkStyles}>
                {t('menu-text-todo')}
              </NavLink>
              <NavLink to="/todo-with-recoil" style={navLinkStyles}>
                {t('menu-text-todo-with-recoil')}
              </NavLink>
            </ul>
          </Drawer>
        </header>
        <main className="content">
          <Routes>
            <Route path="*" element={<Navigate to="/" />} />
            <Route
              path="/"
              element={auth ? <HomePageContainer /> : <LoginPageContainer />}
            />
            <Route path="/login" element={<LoginPageContainer />} />
            <Route path="/posts" element={<PostsPageContainer />} />
            <Route path="/todo" element={<TodoPageContainer />} />
            <Route
              path="/todo-with-recoil"
              element={<TodoWithRecoilPageContainer />}
            />
            {auth && <Route path="/home" element={<HomePageContainer />} />}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default Layout
