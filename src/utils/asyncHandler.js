// (2) promise
const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).
            catch((err) => next(err))
    }
}


export { asyncHandler }


// (1) async await try catch
/*
const asyncHandler = (fn) => {
    async (req, res, next) => {
        try {
            await fn(req, res, next)
        } catch (error) {
            res.status(error.code || 500).json({
                success: false,
                message: error.message
            })
        }
    }
}
*/