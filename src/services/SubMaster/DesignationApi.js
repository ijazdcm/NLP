import axios from 'axios'
import { API_URL } from 'src/App'

const API_BASE_URL = API_URL + 'designation' //Development

class DesignationApi {
  getDesignation() {
    return axios.get(API_BASE_URL)
  }

  createDesignation(value) {
    return axios.post(API_BASE_URL, value)
  }

  getDesignationById(DesignationId) {
    return axios.get(API_BASE_URL + '/' + DesignationId)
  }

  updateDesignation(Designation, DesignationId) {
    return axios.put(API_BASE_URL + '/' + DesignationId, Designation)
  }

  deleteDesignation(DesignationId) {
    return axios.delete(API_BASE_URL + '/' + DesignationId)
  }
}

export default new DesignationApi()
