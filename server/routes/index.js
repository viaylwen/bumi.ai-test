const express = require('express')
const PhotoController = require('../controllers/photoController')
const FavoriteController = require('../controllers/favoriteController')
const router = express.Router()

router.get('/photos', PhotoController.findAll)
router.get('/photos/:id', PhotoController.findOne)
router.get('/favorites', FavoriteController.findAll)
router.post('/favorites/:photoId', FavoriteController.addToFavorite)
router.delete('/favorites/:id', FavoriteController.delete)

module.exports = router