import express from 'express'
import path from 'path'
import productData from '../data/products.js'
import { fileURLToPath } from 'url'
import exp from 'constants'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json(productData)
})

router.get('/:productId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/gift.html'))
})

export default router
