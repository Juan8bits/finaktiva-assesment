module.exports = (route, config, services) => {
    /**
     * @swagger
     * status:
     *  get:
     *    summary: Ping the Microservice, make sure it is alive!.
     *    description: This endpoint of the API helps other services or developers ping the service to check if it is ok or not.
     *    responses:
     *      200:
     *        description: It simply returns 200 whenever the service is up and running.
     *      500:
     *        description: If there is an internal server error.
     *    tags:
     *      - /status
     */
    route.get('/status', async (req, res) => {
        res.status(200).send("Hey! I'm alive :)").end()
    })
    route.head('/status', (req, res) => {
        res.status(200).end()
    })

    return route
}