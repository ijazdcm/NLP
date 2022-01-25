// Created By Alwin
import axios from 'axios'
import { APIURL } from 'src/App'

const API_BASE_URL = APIURL + 'uom'

class UomApi {
  getUom() {
    return axios.get(API_BASE_URL)
  }

  createUom(value) {
    return axios.post(API_BASE_URL, value)
  }

  getUomById(UomId) {
    return axios.get(API_BASE_URL + '/' + UomId)
  }

  updateUom(Uom_Data, UomId) {
    return axios.put(API_BASE_URL + '/' + UomId, Uom_Data)
  }

  deleteUom(UomId) {
    return axios.delete(API_BASE_URL + '/' + UomId)
  }
}

export default new UomApi()
