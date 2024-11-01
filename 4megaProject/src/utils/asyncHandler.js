// higher order function


const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise
            .resolve(requestHandler(req, res, next))
            .catch((err) => {
                next(err)
            })
    }
}

export { asyncHandler };
    
    




// export const asyncHandler = (fn) => {
//     async (req, res, next) => {
//         try {
//             await fn(res, req, nex);
//         } catch (error) {
//             res
//                 .status(error.code || 500)
//                 .json({
//                     success: false,
//                     message: error.message
//                 })
//         }
//     }
// }



    
    
