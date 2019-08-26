const toyService = require('./toyService')

async function getToys(req, res) {
    console.log('getting toys')
    let filterBy = req.body
    const toys = await toyService.query(filterBy)
    res.json(toys)
}

async function getToy(req, res) {
    try {
        const toy = await toyService.getById(req.params.id)
        res.json(toy)
    } catch (err) {
        return res.status(404).send('Toy not found')
    }
}

async function deleteToy(req, res) {
    try{
        await toyService.remove(req.params.id)
        console.log('deleted', req.params.id)
        res.json({})
    } catch (err) { 
        return res.status(404).send('Toy not found')
    }
}

async function addToy(req, res) {
    const toy = req.body
    try{
    await toyService.add(toy)
    res.json({})
    } catch (err) {
        return res.status(418).send('I am a teapot, and something went wrong with adding a new toy')
    }
}

async function updateToy(req, res) {
    const toy = req.body;
    try{
    await toyService.update(toy);
        return res.json({});
    } catch (err) {
        res.status(404).send(`Toy for update not found. Error: ${err}`)
    }
}


module.exports = {
    getToys,
    getToy,
    deleteToy,
    addToy,
    updateToy,
}
