const errorHandler = (err, req, res, next) => {
    res.status(404).json({sms: err.sms});
}

export default errorHandler;