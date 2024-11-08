module.exports = (route, config, services) => {

    route.get('/logs', async (req, res, next) => {
        try {
            const { type, page, perPage } = req.query;
            const logs = await services.LogService.getAll({ type, page, perPage })
            return res.status(200).send(logs)
        } catch (error) {
            return next(error);
        }
    })

    route.post('/logs/create', async (req, res, next) => {
        try {
            const log = await services.LogService.create(req.body);
            return res.status(200).send(log)
        } catch (error) {
            return next(error);
        }
    })
    return route
}