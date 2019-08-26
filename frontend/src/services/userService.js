import httpService from './httpService'

export default {
    login,
    signup
}

function login (userCred) {
    httpService.post(_getUrl('login'), userCred);
}

function signup (userCred) {
    httpService.post(_getUrl('signup'), userCred)
}

function _getUrl(action = '') {
    return `auth/${action}`
}