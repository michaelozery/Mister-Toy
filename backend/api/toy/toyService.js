'use strict'

// const utilService = require('./utilService')
// var toys = readToys();
// const fs = require('fs')

const dbService = require('../../services/dbService')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    getById,
    remove,
    add,
    update
}

async function query(filterBy = {}) {
    const criteria = {};
    const regex = new RegExp(filterBy.name)
    criteria.name = { $regex: regex }
    if (filterBy.inStock && filterBy.inStock!== 'null' ) {
        criteria.inStock = filterBy.inStock
    }
    if(filterBy.type) {
        criteria.type = filterBy.type
    }
    if(filterBy.minPrice){
        criteria.minPrice = {$gte:filterBy.minPrice}
    }
    if(filterBy.maxPrice){
        criteria.maxPrice = {$lte:filterBy.maxPrice}
    }

    console.log('criteria is:', criteria);
    const collection = await dbService.getCollection('toy')
    try {
        const toys = await collection.find(criteria).toArray();
        return toys
    } catch (err) {
        console.log('ERROR: cannot find toys')
        throw err;
    }
}

async function getById(toyId) {
    const collection = await dbService.getCollection('toy')
    try {
        const toy = await collection.findOne({ "_id": ObjectId(toyId) })
        return toy
    } catch (err) {
        console.log(`ERROR: cannot find toy ${toyId}`)
        throw err;
    }
}

async function remove(toyId) {
    const collection = await dbService.getCollection('toy')
    try {
        await collection.deleteOne({ "_id": ObjectId(toyId) })
    } catch (err) {
        console.log(`ERROR: cannot remove toy ${toyId}`)
        throw err;
    }
}

async function add(toy) {
    const collection = await dbService.getCollection('toy')
    try {
        await collection.insertOne(toy);
        return;
    } catch (err) {
        console.log(`ERROR: cannot insert toy`)
        throw err;
    }
}

async function update(toy) {
    const collection = await dbService.getCollection('toy')
    const id = toy._id;
    delete toy._id;
try {
        await collection.updateOne({ "_id": ObjectId(id) }, { $set: toy })
        return toy
    } catch (err) {
        console.log(`ERROR: cannot update toy ${toy._id}`)
        throw err;
    }
}