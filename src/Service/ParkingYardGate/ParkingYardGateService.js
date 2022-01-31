
import AppConfig from "src/AppConfig";
import api from "../Config";

import {VEHILCE_MASTER_BASE_URL} from "src/Service/Master/VehicleMasterService"

const PARKING_YRD_URL = AppConfig.api.baseUrl+ '/parkingYard'

const VEHILCE_URLS = VEHILCE_MASTER_BASE_URL+"/type/"

class ParkingYardGateService {


   getVehiclebyType(id)
   {
    return api.get(VEHILCE_URLS +id)
   }


}

export default new  ParkingYardGateService()
