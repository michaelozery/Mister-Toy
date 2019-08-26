async function requireAuth(req, res, next) {
    if(!req.session || !req.session.user) {
        return res.status(401).end('Unauthorized')
    }
    next()
}

module.exports = requireAuth