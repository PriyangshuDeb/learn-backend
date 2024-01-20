class ApiError extends Error {       // error is a premade nodejs class
    constructor(statusCode, message= 'Something Went Wrong', errors = [], stack = "",){  
        // {} = overwriting constructor with custom constructor
        super(message)  // super call for overwrite
        this.statusCode = statusCode
        this.data = null,
        this.message = message,
        this.success = false
        this.errors = errors
        if(stack){
            this.stack = stack
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}