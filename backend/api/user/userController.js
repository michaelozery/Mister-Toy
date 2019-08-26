const userService = require('./userService')

async function getUsers(req, res) {
    let filterBy = req.body
    const users = await userService.query(filterBy)
    res.json(users)
}

async function getUser(req, res) {
    try {
        const user = await userService.getById(req.params.id)
        res.json(user)

    } catch (err) {
        return res.status(404).send('User not found');
    }
}


async function deleteUser(req, res) {
    await userService.remove(req.params.id)
    res.json({})
}

async function getLoggedInUser(req, res) {
    let user = req.session.user;
    if (user) res.json(user);
    else res.json(null)
}

async function updateUser(req, res) {
    let user = req.body;
    if (user._id === req.session.user._id) {
        await userService.update(user);
        return res.json({});
    }
    else return res.status(401).send('Unauthorized')
}


module.exports = {
    getUser,
    getUsers,
    deleteUser,
    getLoggedInUser,
    updateUser,
}
