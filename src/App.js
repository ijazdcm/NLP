import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './scss/style.scss'
import store from './store'

export const API_URL = 'http://127.0.0.1:8000/api/v1/'

export const REQUEST_HEADERS = () => {
  return {
    HEADER: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('empId')}`,
    },
  }
}

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers

const DefaultLayout = React.lazy(() => import('../src/Layout/DefaultLayout'))

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route path="/" name="Home" render={(props) => <DefaultLayout {...props} />} />
            </Switch>
          </React.Suspense>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
