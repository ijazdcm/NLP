import axios from 'axios'
import { APIURL } from 'src/App'

const API_BASE_URL = APIURL + 'status' //Development

class StatusApi {
  getStatus() {
    return axios.get(API_BASE_URL)
  }

  createStatus(value) {
    return axios.post(API_BASE_URL, value)
  }

  getStatusById(StatusId) {
    return axios.get(API_BASE_URL + '/' + StatusId)
  }

  updateStatus(Status, StatusId) {
    return axios.put(API_BASE_URL + '/' + StatusId, Status)
  }

  deleteStatus(StatusId) {
    return axios.delete(API_BASE_URL + '/' + StatusId)
  }
}

export default new StatusApi()
