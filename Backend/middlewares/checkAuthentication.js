const checkAuthentication = (req, res, next) => {
  const authorization = req.headers?.authorization;
  const token = authorization?.split(" ")[1];
  if (token) {
    const decodedUserInfo = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decodedUserInfo);
    if (decodedUserInfo) {
      req.user = decodedUserInfo;
      return next();
    } else {
      return res
        .status(404)
        .json({ success: false, message: "Session expired or Invalid token" });
    }
  } else {
    return res
      .status(400)
      .json({ success: false, message: "Not logged in (no token) " });
  }
};

module.exports = checkAuthentication;
