const { pizzas: { getPizzas,addPizza,eatPizza,removePizza } } = require('../controllers')


module.exports = app => {
    // get all pizza
    app.get('/pizzas', (req,res) => {
        pizzas.getPizzas(pizzas =>{
            res.json(pizzas)
        })
    })

    // post a pizza 
    app.post('/pizzas', (req,res) => {
        addPizza(req.body.name, req.body.eaten, () =>{
            res.sendStatus(200)
        })
    })

    // put one pizza 
    app.put('/pizzas/:id', (req,res) => {
        eatPizza(parseInt(req.params.id), () => {
            res.sendStatus(200)
        })
    })

    // delete one pizza 
    app.delete('/pizzas/:id', (req,res) => {
        removePizza(parseInt(req.params.id), ()=> {
            res.sendStatus(200)
        })
    })
}