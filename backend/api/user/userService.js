'use strict'

const dbService = require('../../services/dbService')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    getById,
    remove,
    add,
    update,
    login,
    getByUsername
}

async function query(filterBy = {}) {
    const criteria = {}
    if(filterBy.username) {
        criteria.username = filterBy.username
    }
    const collection = await dbService.getCollection('user')
    try {
        const users = await collection.find(criteria).toArray()
        return users
    } catch (err) {
        console.log('ERROR: cannot find users')
        throw err;
    }
}

async function getById(userId) {
    const collection = await dbService.getCollection('user')
    try {
        const user = await collection.findOne({ "_id": ObjectId(userId) })
        return user
    } catch (err) {
        console.log(`ERROR: cannot find user ${userId}`)
        throw err;
    }
}

async function getByUsername(username) {
    const collection = await dbService.getCollection('user')
    try {
        const user = await collection.findOne({ username })
        return user
    } catch (err) {
        console.log(`ERROR: while finding user ${username}`)
        throw err;
    }
}

async function remove(userId) {
    const collection = await dbService.getCollection('user')
    try {
        await collection.remove({ "_id": ObjectId(userId) })
    } catch (err) {
        console.log(`ERROR: cannot remove user ${userId}`)
        throw err;
    }
}

async function add(user) {
    const collection = await dbService.getCollection('user')
    try {
        await collection.insertOne(user);
        return user;
    } catch (err) {
        console.log(`ERROR: cannot insert user`)
        throw err;
    }
}

async function update(user) {
console.log('updating',user);
    const collection = await dbService.getCollection('user')
    try {
        const id = user._id;
        delete user._id;
        await collection.updateOne({ "_id": ObjectId(id) }, { $set: user })
        return user
    } catch (err) {
        console.log(`ERROR: cannot update user ${user._id}`)
        throw err;
    }
}

async function login(credentials) {
    const collection = await dbService.getCollection('user')
    try {
        const user = await collection.find({ $and: [{ userName: credentials.userName }, { password: credentials.password }] }).toArray();
        if (user.length) return user
        throw new Error
    } catch (err) {
        console.log('ERROR: cannot find users')
        throw err;
    }

}