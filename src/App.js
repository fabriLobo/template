import React from 'react'
import { Provider } from 'react-redux'
import { RecoilRoot } from 'recoil'
import Store from '../src/redux/store'
import '../src/i18n'
import Layout from '../src/components/layout'
import './assets/styles/main.css'

const App = () => (
  <Provider store={Store}>
    <RecoilRoot>
      <Layout />
    </RecoilRoot>
  </Provider>
)

export default App
