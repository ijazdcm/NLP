import axios from 'axios'
import {API_URL} from '../../App'

const API_BASE_URL = API_URL + 'rejection_reason' //Development

class RejectionReasonApi {
  getRejectionReason() {
    return axios.get(API_BASE_URL)
  }

  createRejectionReason(value) {
    return axios.post(API_BASE_URL, value)
  }

  getRejectionReasonById(RejectionReasonId) {
    return axios.get(API_BASE_URL + '/' + RejectionReasonId)
  }

  updateRejectionReason(RejectionReason, RejectionReasonId) {
    return axios.put(API_BASE_URL + '/' + RejectionReasonId, RejectionReason)
  }

  deleteRejectionReason(RejectionReasonId) {
    return axios.delete(API_BASE_URL + '/' + RejectionReasonId)
  }
}

export default new RejectionReasonApi()
