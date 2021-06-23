function errorHandler(err, req, res, next) {
    switch (err.name) {
        case "BadRequest":
            res.status(err.status).json({
                message: "Bad Request",
                errors: [err.message]
            })
        break;    
        case "NotFound":
            res.status(err.status).json({
                message: "Not Found",
                errors: [err.message]
            })
        break;                
        default:
            res.status(err.status || 500).json({
                message: err.message || ["Internal Server Error"]
            })
        break;
    }
}

module.exports = errorHandler