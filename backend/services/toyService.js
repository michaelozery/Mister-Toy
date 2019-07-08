'use strict'

// const utilService = require('./utilService')
// var toys = readToys();
// const fs = require('fs')

const dbService = require('./dbService')
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

    // if (filterBy.minBalance) {
    //     criteria.balance = {$gte : filterBy.minBalance}
    // }
    console.log('criteria is:', criteria);
    const collection = await dbService.getCollection('toy')
    // console.log('collection is:',  await dbService.getCollection('toy'));

    try {
        const toys = await collection.find(criteria).toArray();
        // console.log('after toarray and find',await collection.find(criteria).toArray());
        return toys
    } catch (err) {
        console.log('ERROR: cannot find toys')
        throw err;
    }

    // return Promise.resolve(toys)


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
    //NOTE: CHANGE THE ID TO STRING LATER IN THE DB
    // return Promise.resolve(toys.find(toy => '' + toy._id === toyId))
}

async function remove(toyId) {
    const collection = await dbService.getCollection('toy')
    try {
        await collection.remove({ "_id": ObjectId(toyId) })
    } catch (err) {
        console.log(`ERROR: cannot remove toy ${toyId}`)
        throw err;
    }
    // let idx = toys.findIndex(toy => '' + toy._id === toyId)
    // if (idx !== -1) {
    //     toys.splice(idx, 1)
    //     _saveToysToFile()
    //     return Promise.resolve()
    // }
    // else return Promise.reject('Toy ID was not found in remove function')
}

async function add(toy) {
    const collection = await dbService.getCollection('toy')
    try {
        await collection.insertOne(toy);
        return toy;
    } catch (err) {
        console.log(`ERROR: cannot insert toy`)
        throw err;
    }
    // return new Promise((resolve, reject) => {
    //     toy._id = utilService.makeId(5)
    //     toy.createdAt = new Date()
    //     toys.push(toy)
    //     _saveToysToFile()
    //     return resolve(toy)
    // })
}

async function update(toy) {

    const collection = await dbService.getCollection('toy')
    try {
        await collection.updateOne({ "_id": ObjectId(toy._id) }, { $set: toy })
        return toy
    } catch (err) {
        console.log(`ERROR: cannot update toy ${toy._id}`)
        throw err;
    }

    // return new Promise((resolve, reject) => {
    //     var idx = toys.findIndex(currToy => '' + currToy._id === toy._id)
    //     if (idx !== -1) {
    //         toys.splice(idx, 1, toy)
    //         _saveToysToFile()
    //         return resolve()
    //     }
    //     return reject();
    // })
}

// function readToys() {
//     let toys = require('../toy.json')
//     return toys
// }

// function _getIdxById(id) {
//     return toys.findIndex(toy => '' + toy._id === id)
// }

// function _saveToysToFile() {
//     return new Promise((resolve, reject) => {
//         fs.writeFile("./toy.json", JSON.stringify(toys), (err) => {
//             if (err) return reject(err)
//             resolve()
//         })
//     })
// }