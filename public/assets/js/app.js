const getPizzas = () => {
    axios.get('/pizzas')
      .then(pizzas => {
        console.log(pizzas)
      })
      .catch(e => console.error(e))
  }
  
  const addPizza = (name) => {
    axios.post('/pizzas', {
      name,
      eaten: false
    })
      .then(() => {
        console.log('Pizza Added!')
      })
      .catch(e => console.error(e))
  }
  
  const eatPizza = id => {
    axios.put(`/pizzas/${id}`)
      .then(() => {
        console.log('Pizza Eaten!')
      })
      .catch(e => console.error(e))
  }
  
  const removePizza = id => {
    axios.delete(`/pizzas/${id}`)
      .then(() => {
        console.log('Pizza Removed!')
      })
      .catch(e => console.error(e))
  }
  
  document.getElementById('addPizza').addEventListener('click', e => {
    e.preventDefault()
    addPizza(document.getElementById('pizza').value)
    document.getElementById('pizza').value = ''
    window.location.reload()
  })
  
  document.addEventListener('click', e => {
    if(e.target.parentNode.className.includes('eatPizza')) {
      eatPizza(e.target.parentNode.dataset.pizza)
      window.location.reload()
    } else if (e.target.parentNode.className.includes('removePizza')) {
      removePizza(e.target.parentNode.dataset.pizza)
      window.location.reload()
    }
  })