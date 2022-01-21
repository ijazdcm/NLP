import axios from 'axios'
import { APIURL } from 'src/App'

const API_BASE_URL = APIURL + 'vehicleCapacity' //Development

class VehicleCapacityApi {
  getVehicleCapacity() {
    return axios.get(API_BASE_URL)
  }

  createVehicleCapacity(value) {
    return axios.post(API_BASE_URL, value)
  }

  getVehicleCapacityById(VehicleCapacityId) {
    return axios.get(API_BASE_URL + '/' + VehicleCapacityId)
  }

  updateVehicleCapacity(VehicleCapacity, VehicleCapacityId) {
    return axios.put(API_BASE_URL + '/' + VehicleCapacityId, VehicleCapacity)
  }

  deleteVehicleCapacity(VehicleCapacityId) {
    return axios.delete(API_BASE_URL + '/' + VehicleCapacityId)
  }
}

export default new VehicleCapacityApi()
