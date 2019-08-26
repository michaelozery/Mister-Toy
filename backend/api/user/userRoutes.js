'use strict'
const express = require('express')
const requireAuth = require('../../middlewares/requireAuth')
const router = express.Router()
const userService = require('./userService')
const userController = require('./userController')

router.get('/', userController.getUsers)
router.get('/current', userController.getLoggedInUser)
router.get('/:id', userController.getUser)
router.put('/:id', userController.updateUser)
router.delete('/:id', requireAuth, userController.deleteUser)


router.get('/', (req,res) => {
    userService.query().then(users => res.json(users))
})

router.get('/:id', (req,res) =>{
    const {id} = req.params
    userService.getById(id).then(user => res.json(user))
    .catch(err => res.status('404').send(`User not found. Error: ${err}`))
})


router.delete('/:id', (req,res) =>{
    const {id} = req.params
    userService.remove(id)
    .then(() => res.json({}))
    .catch((err=> req.status('403').send('User was not deleted. err:',err)))
})

router.post('/', (req,res) =>{
    let user = req.body;
    userService.add(user)
    .then(user => res.json(user))
    .catch(err => res.status('403').send(err))
})

router.put('/:id', (req,res) =>{
    let user = req.body;
    userService.update(user)
    .then(user => res.json(user))
    .catch(err => res.status('403').send(err))
})

router.post('/login', (req, res) => {
    const credentials = req.body
    userService.login(credentials)
    .then(user => {
        console.log('user we got back:', user)
        req.session.user = user
        res.json(user)
    })
    .catch(err => {
        console.log(err)
        res.status(401).send('Not Authorized')
    })
})
module.exports = router