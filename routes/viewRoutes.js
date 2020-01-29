const {
    pizzas: {
        getPizzas
    }
}= require('../controllers')


module.exports = app => {
    app.get('/', (req,res) =>{
        getPizzas(pizzas => {
            res.render('index', { pizzas })
        })
    })
}