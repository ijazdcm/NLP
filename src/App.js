import React, { Component } from 'react'
import { Provider, useDispatch } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Pages/Auth/Login'
import './scss/style.scss'
import store from './store'
// export const APIURL = 'http://localhost/LP_BE/api/v1/'
export const APIURL = 'http://127.0.0.1:8000/api/v1/'
// export const APIURL = 'http://127.0.0.1:8000/'

import LocalStorageService from 'src/Service/LocalStoage'
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)
// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

function App() {
  const token = LocalStorageService.getLocalstorage('auth_token')
  let isauth = token ? true : false
  // let isauth = false

  return (
    <React.Suspense fallback={loading}>{isauth ? <DefaultLayout /> : <Login />}</React.Suspense>
  )
}

export default App
