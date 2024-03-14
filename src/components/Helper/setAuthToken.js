import api from '../../services/api'

export const setAuthToken = token => {
    if (token) {
        localStorage.setItem('token', token)
        api.defaults.headers.common["Authorization"] = `${token}`
    }
    else {
        localStorage.removeItem('token')
        delete api.defaults.headers.common["Authorization"]
    }
}