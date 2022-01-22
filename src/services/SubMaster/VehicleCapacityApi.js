import axios from 'axios'
import { API_URL } from 'src/App'

const API_BASE_URL = API_URL + 'vehicleCapacity' //Development

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
