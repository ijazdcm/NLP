import AppConfig from "src/AppConfig";
import api from "../Config";
const AUTH_API_BASE_URL=AppConfig.api.baseUrl+'/admin/login'
const AUTH_API_BASE_URL_LOGOUT=AppConfig.api.baseUrl+'/admin/logout'
class AuthService  {

    login(data)
    {
      return api.post(AUTH_API_BASE_URL,data)
    }

    logout()
    {
      return api.post(AUTH_API_BASE_URL_LOGOUT)
    }
}

export default new AuthService();
