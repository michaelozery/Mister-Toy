const bcrypt = require('bcrypt')
const userService = require('../user/userService')
const logger = require('../../services/loggerService')

const saltRounds = 10

async function login(username, password) {
    if (!username || !password) return Promise.reject('Username and password are required!')
    const user = await userService.getByUsername(username)
    if (!user) return Promise.reject('Invalid email or password')
    const match = await bcrypt.compare(password, user.password)
    if (!match) return Promise.reject('Invalid email or password')
    delete user.password;
    return user;
}

async function signup(username, password, name) {
    logger.debug(`authService - signup with username: ${username}`)
    if (!password || !username || !name) return Promise.reject('username and password are required!')
    let user = await userService.getByUsername(username)
    if (user) return Promise.reject('Username already exists')

    const hash = await bcrypt.hash(password, saltRounds)
    user = await userService.add({ password: hash, username, name })
    delete user.password;
    return user;

}

module.exports = {
    signup,
    login,
}