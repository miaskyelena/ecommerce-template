import express from 'express' 
import productsRouter from './routes/products.js'

const app = express() 
<<<<<<< Updated upstream
=======
const port = process.env.PORT || 3001

app.use('/public', express.static('public'))
app.use('/products', productsRouter)
app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">Ecommerce API</h1>')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
>>>>>>> Stashed changes

app.use('/public', express.static('./public')) 

