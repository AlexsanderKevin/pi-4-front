import api from '../../services/api'

export const setAuthToken = token => {
    if (token) {
        api.defaults.headers.common["Authorization"] = `${token}`;
    }
    else
        delete api.defaults.headers.common["Authorization"];
}