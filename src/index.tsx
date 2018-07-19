/* tslint:disable:jsx-no-lambda tslint:disable:no-submodule-imports */

import {createBrowserHistory} from 'history'
import 'moment/locale/ru'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Route, Switch} from 'react-router'
import { BrowserRouter, Link} from 'react-router-dom'
import {ModalContainer, ModalRoute} from 'react-router-modal'
import Header from './components/shared/Header'
import {configureStore} from './store'
import './style.scss'
import {AsyncComponent} from './utils/AsyncComponentLoader'

const store = configureStore()
export const history = createBrowserHistory()

const Home = () => (
  <AsyncComponent
    moduleProvider={() => import(/* webpackMode: "lazy", webpackChunkName: "home" */ './components/pages/Home')}
  />
)



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className='app-content'>
        <Header/>
        <Switch>
          <Route 
            path="/" 
            exact={true}
            component={Home}
          />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
)
