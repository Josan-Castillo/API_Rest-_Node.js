'use strict'

const express = require('express')
const ProductCtrl = require('../controllers/product')
const UserCtrl = require('../controllers/User')
const auth = require('../middlewares/auth')
const api = express.Router()

api.get('/product', auth, ProductCtrl.getproducts)
api.get('/product/:productId', ProductCtrl.getProduct)
api.post('/product', auth, ProductCtrl.saveProduct)
api.put('/product/:productId', auth, ProductCtrl.updateProduct)
api.delete('/product/:productId', auth, ProductCtrl.deleteProduct)
api.post('/signup', UserCtrl.signUp)
api.post('/signin', UserCtrl.signIn)
api.get('/private', auth, (req, res) => {
  res.status(200).send({message:'Tienes acceso'})
})

module.exports = api
