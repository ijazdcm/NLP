import axios from 'axios'

const API_BASE_URL = 'http://localhost/LogisticPro' //Development

//  API For User Login Master
class UserLoginMaster {
  // Get All User
  getUser() {
    return axios.get(API_BASE_URL)
  }

  // Create New User
  createUser(value) {
    return axios.post(API_BASE_URL, value)
  }

  // Get Single User By Id
  getUserById(UserId) {
    return axios.get(API_BASE_URL + '/' + UserId)
  }

  // Update Single User By Id
  updateUser(User, UserId) {
    return axios.put(API_BASE_URL + '/' + UserId, User)
  }

  // Delete Single User By Id
  deleteUser(UserId) {
    return axios.delete(API_BASE_URL + '/' + UserId)
  }
}

export default new UserLoginMaster()
