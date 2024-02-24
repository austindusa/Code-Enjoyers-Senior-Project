import axios from "axios";

const EXTERNSHIP_WEBSITE_URL = 'http://localhost:8080'
class Service {
    createUser(user) {
        return axios.post(EXTERNSHIP_WEBSITE_URL + '', user);
    }

    getUser() {
        return axios.get(EXTERNSHIP_WEBSITE_URL + 'userId', userId);
    }
}
