import axios from 'axios';


const STAFF_API_BASE_URL = 'http://localhost:6060/api'

class ProjectService {
    getProject(){
        return axios.get(STAFF_API_BASE_URL + "/project");
    }

    addProject(project){
        return axios.post(STAFF_API_BASE_URL + "/addProject", project);
    }

    getProjectById(proId){
        return axios.get(STAFF_API_BASE_URL + "/project/" + proId);
    }

    updateProject(project, proId){
        return axios.put(STAFF_API_BASE_URL + "/updateProject/" + proId, project);
    }

    deleteProject(proId){
        return axios.delete(STAFF_API_BASE_URL + "/deleteProject/" + proId);
    }
}

export default new ProjectService()