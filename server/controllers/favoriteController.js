const { Photo, Favorite } = require('../models')

class FavoriteController {
    static async findAll (req, res, next) {
        try {
            const favoriteData = await Favorite.findAll({
                include: {
                    model: Photo
                }
            })
            if (favoriteData) {
                res.status(200).json(favoriteData)
            } else {
                throw {
                    name: "NotFound",
                    status: 404,
                    message: "Data Not Found"
                }
            }
        } catch (err) {
            next(err)
        }
    }

    static async addToFavorite (req, res, next) {
        try {
            const photo = {
                PhotoId: +req.body.PhotoId
            }
            let favoriteData = await Favorite.create(photo)
            res.status(201).json(favoriteData)
        } catch (err) {
            next(err)
        }
    }

    static async delete (req, res, next) {
        try {
            const id = req.params.id
            let selection = await Favorite.findByPk(id)
            if (!selection) {
                throw {
                    name: "NotFound",
                    status: 404,
                    message: "Data Not Found"
                }
            } else {
                await selection.destroy()
                res.status(200).json({message: "Photo Successfully Removed From Favorite"})
            }
        } catch (err) {
            next(err)
        }
    }

}

module.exports = FavoriteController