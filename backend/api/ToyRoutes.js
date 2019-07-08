'use strict'
const express = require('express')
const router = express.Router()
const toyService = require('../services/ToyService')
module.exports = router

router.get('/', (req,res) => {
    const filterBy = req.query
    // console.log('THE FILTER THE SERVER GOT IS:', filterBy);
    toyService.query(filterBy).then(toys => res.json(toys))
})

router.get('/:id', (req,res) =>{
    const {id} = req.params
    toyService.getById(id).then(toy => res.json(toy))
    .catch(err => res.status('404').send('Toy Not Found. Maybe you entered it wrong?'))
})

router.delete('/:id', (req,res) =>{
    const {id} = req.params
    toyService.remove(id)
    .then(() => res.json({}))
    .catch((err=> req.status('403').send('toy was not deleted. err:',err)))
})

router.post('/', (req,res) =>{
    let toy = req.body;
    toyService.add(toy)
    .then(toy => res.json(toy))
    .catch(err => res.status('403').send(err))
})

router.put('/:id', (req,res) =>{
    let toy = req.body;
    toyService.update(toy)
    .then(toy => res.json(toy))
    .catch(err => res.status('403').send(err))
})