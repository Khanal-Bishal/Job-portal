const customErrorHandler = (err, req, res, next) => {
  let status = 500;
  let message = "SERVER ERROR";
  let errArray = [];
  let errObject = [];
  if (err.name === "ValidationError") {
    status = 400;
    errArray = Object.entries(err.errors);
    errArray.forEach((validation_err) => {
      let obj = {};
      obj.params = validation_err[0];
      obj.errorMessage = validation_err[1].message;
      errObject.push(obj);
    });
    return res
      .status(status)
      .json({ success: false, errorType: errObject, message: err.message });
  }
  res
    .status(status)
    .json({ success: false, errorType: message, messsage: err.message });
};

module.exports = customErrorHandler;
