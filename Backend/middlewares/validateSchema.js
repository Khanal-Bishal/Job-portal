const validateSchema = (Schema) => {
  return (req, res, next) => {
    const { error, value } = Schema.validate(req.body, { abortEarly: false });
    const errObj = [];
    if (error) {
      error.details.forEach((validate_err) => {
        obj = {};
        obj.params = validate_err.context.key;
        obj.message = validate_err.message;
        errObj.push(obj);
      });
      return res
        .status(400)
        .json({ success: false, errorType: errObj, error: error.message });
    } else {
      next();
    }
  };
};
module.exports = validateSchema;
