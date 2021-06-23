const { Photo } = require('../models')

class PhotoController {
    static async findAll (req, res, next) {
        try {
            const data = await Photo.findAll()
            if (data) {
                res.status(200).json(data)
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

    static async findOne(req, res, next) {
        try {
            const id = req.params.id
            const data = await Photo.findByPk(id)
            if (data) {
                res.status(200).json(data)
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
}

module.exports = PhotoController