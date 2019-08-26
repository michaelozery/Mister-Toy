const authService = require('./authService')
const logger = require('../../services/loggerService')

module.exports = {
    login,
    signup,
    logout,
    checkTime
}

async function login(req, res) {
    const { username, password } = req.body
    console.log('user:', username, 'pass:', password)
    try {
        const user = await authService.login(username, password)
        req.session.user = user;
        res.json(user)
    } catch (err) {
        res.status(401).send({ error: err })
    }
}

async function signup(req, res) {
    try {
        const { password, username, name } = req.body
        logger.debug(username)
        const user = await authService.signup(username, password, name)
        logger.debug(`auth.route - new user created: ` + JSON.stringify(user))
        req.session.user = user
        res.status(200).send(user)
    } catch (err) {
        logger.error('[SIGNUP] ' + err)
        res.status(500).send({ error: 'could not signup, please try later' })
    }
}

async function logout(req, res) {
    try {
        req.session.destroy()
        res.send({ message: 'logged out successfully' })
    } catch (err) {
        res.status(500).send({ error: err })
    }
}

 function checkTime(req,res){
    let {date} = req.body
    let timeStamp = new Date(date).getTime()
    res.json(timeStamp)
 }

