const errorHandler = (req, res, next) => {
  res.status(404).json({ success: false, message: "Page not found" });
};
module.exports = errorHandler;
