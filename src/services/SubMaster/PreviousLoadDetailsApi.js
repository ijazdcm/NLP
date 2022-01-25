// Created By maria
import axios from 'axios'
import { APIURL } from 'src/App'

const API_BASE_URL = APIURL + 'previous_load_details'

class PreviousLoadDetailsApi {
  getPreviousLoadDetails() {
    return axios.get(API_BASE_URL)
  }

  createPreviousLoadDetails(value) {
    return axios.post(API_BASE_URL, value)
  }

  getPreviousLoadDetailsById(PreviousLoadDetailsId) {
    return axios.get(API_BASE_URL + '/' + PreviousLoadDetailsId)
  }

  updatePreviousLoadDetails(PreviousLoadDetails_Data, PreviousLoadDetailsId) {
    return axios.put(API_BASE_URL + '/' + PreviousLoadDetailsId, PreviousLoadDetails_Data)
  }

  deletePreviousLoadDetails(PreviousLoadDetailsId) {
    return axios.delete(API_BASE_URL + '/' + PreviousLoadDetailsId)
  }
}
export default new PreviousLoadDetailsApi()
