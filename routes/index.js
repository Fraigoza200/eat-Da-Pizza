module.exports = app => {
    require('./pizzaRoutes')(app)
    require('./viewRoutes')(app)
}