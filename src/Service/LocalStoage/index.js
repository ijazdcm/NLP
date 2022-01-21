

class LocalStorageService {



    setLocalstorage(key,value)
    {
        localStorage.setItem(key,value);
    }
    
    getLocalstorage(key)
    {
       return localStorage.getItem(key);
    }



}

export default new LocalStorageService()