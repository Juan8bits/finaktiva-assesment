module.exports = (route, config, services) => {

    route.get('/status', async (req, res) => {
        return res.status(200).send("OK")
    })
    return route
}