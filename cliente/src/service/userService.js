import http from '../api';

const createUser = ()  => {
    return http.post("/user/register", data);
}
const getUser = ()  => {
    return http.post("/user/login", data);
}

export default { createUser, getUser,  }