import axios from "axios";

class AuthenticationService {
    registerSuccessfulLogin(username, pwd) {
        sessionStorage.setItem('authenticatedUser', username);
        sessionStorage.setItem('authenticatedpassword', pwd);
    }

    isUserLoggedIn() {
        const username = sessionStorage.getItem('authenticatedUser');
        if (username == null) return false
        return true
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser');
        sessionStorage.removeItem('authenticatedpassword');
    }

    loginCheck(username, password){
        return axios.get(`http://localhost:8081/user/auth/${username}/${password}`)
    }

    registerUser(user){
        return axios.post('http://localhost:8081/user/register',user)
    }
}

export default new AuthenticationService()