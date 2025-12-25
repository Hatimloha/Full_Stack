class ApiError extends Error{
    constructor(statusCode,
        message='Something went wrong',
        errors = [],
        stack = ''){
            super(message) // we can overwrite the message
            this.statusCode = statusCode,
            this.data = null  // read why we use the null in this.data
            this.message = message
            this.success = false,
            this.errors = errors 

            if(stack){
                this.stack = stack
            }else{
                Error.captureStackTrace(this, this.constructor)
            }
        }
}

export {ApiError}