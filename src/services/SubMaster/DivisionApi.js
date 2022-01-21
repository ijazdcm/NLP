import axios from 'axios'
import { APIURL } from 'src/App'

const API_BASE_URL = APIURL + 'division' //Development

class DivisionApi {
  getDivision() {
    return axios.get(API_BASE_URL)
  }

  createDivision(value) {
    return axios.post(API_BASE_URL, value)
  }

  getDivisionById(DivisionId) {
    return axios.get(API_BASE_URL + '/' + DivisionId)
  }

  updateDivision(Division, DivisionId) {
    return axios.put(API_BASE_URL + '/' + DivisionId, Division)
  }

  deleteDivision(DivisionId) {
    return axios.delete(API_BASE_URL + '/' + DivisionId)
  }
}

export default new DivisionApi()
