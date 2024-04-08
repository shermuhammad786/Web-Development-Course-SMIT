export const createError = (status, message) => {
    const err = new Error();
    err.status = status
    err.message = message
    return err;
}
export const resSuccess = (status, message) => {
    const response = {
        success: true,
        status: status,
        message: message
    }
    return response
}