import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://3.12.213.136:6060/api/adminLogin";

class LoginService {

    validate(id,password)
    {
        return axios.get(EMPLOYEE_API_BASE_URL+ '/' + id + '/' + password);
    }
}

export default new LoginService()


