import AppConfig from "src/AppConfig";
import api from "../Config";
const AUTH_API_BASE_URL=AppConfig.api.baseUrl+'/admin/login'
class AuthService  {

    login(data)
    {
      return api.post(AUTH_API_BASE_URL,data)
    }


}

export default new AuthService();
