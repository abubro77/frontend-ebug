import axios from 'axios'

const baseUrl = "http://localhost:6060/api/staffLogin";

class StaffLoginService {

    validate(id,password)
    {
        return axios.get(baseUrl+ '/'+ id + '/' + password);
    }

    getDetailsById(bugId)
    {
        return axios.get("http://localhost:6060/api/bugs/"+ bugId);
    }
}

export default new StaffLoginService()