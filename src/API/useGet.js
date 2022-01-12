import React from 'react'
import axios from 'axios'

import { API_URL } from '../App'

export const ParkingView = (data) => {
  const response = axios
    .get('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => {
      // console.log(response.data)
    })
    .catch((err) => {
      // console.log(err)
    })
}

