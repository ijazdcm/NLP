// Created By Alwin
import axios from 'axios'
import { APIURL } from 'src/App'

const API_BASE_URL = APIURL + 'material_description'

class MaterialDescriptionApi {
  getMaterialDescription() {
    return axios.get(API_BASE_URL)
  }

  createMaterialDescription(value) {
    return axios.post(API_BASE_URL, value)
  }

  getMaterialDescriptionById(MaterialDescriptionId) {
    return axios.get(API_BASE_URL + '/' + MaterialDescriptionId)
  }

  updateMaterialDescription(MaterialDescription_Data, MaterialDescriptionId) {
    return axios.put(API_BASE_URL + '/' + MaterialDescriptionId, MaterialDescription_Data)
  }

  deleteMaterialDescription(MaterialDescriptionId) {
    return axios.delete(API_BASE_URL + '/' + MaterialDescriptionId)
  }
}

export default new MaterialDescriptionApi()
