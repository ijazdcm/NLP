
import AppConfig from "src/AppConfig";
import api from "../../Config";

const SHED_TYPE_URL = AppConfig.api.baseUrl+ '/shedType'
class ShedType {

     getShedType()
     {
      return api.get(SHED_TYPE_URL)
     }

}

export default new ShedType()
