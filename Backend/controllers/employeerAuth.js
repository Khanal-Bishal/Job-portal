const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Employeer = require("../model/Employeer");

exports.signup = async (req, res, next) => {
  try {
    const hashedPw = await bcrypt.hash(req.body.password, 10);

    const employeer_info = await Employeer.create({
      ...req.body,
      password: hashedPw,
    });
    const filteredEmployeerInfo = employeer_info.toObject();
    delete filteredEmployeerInfo.password;

    res.status(200).json({
      success: true,
      data: filteredEmployeerInfo,
      message: "User created",
    });
  } catch (error) {
    next(error);
  }
};
exports.login = async (req, res, next) => {
  const employeerInfo = req.body;
  try {
    const existingEmployeer = await Employeer.findOne({
      email: req.body.email,
    });
    if (existingEmployeer) {
      const doesPasswordMatch = await bcrypt.compare(
        req.body.password,
        existingEmployeer.password
      );
      if (doesPasswordMatch) {
        const filteredEmployeerInfo = existingEmployeer.toObject();
        delete filteredEmployeerInfo.password;
        let token = jwt.sign(filteredEmployeerInfo, process.env.JWT_SECRET);
        return res.status(200).json({
          success: true,
          data: filteredEmployeerInfo,
          token,
          message: "user logged in ",
        });
      }
    }
    res.status(401).json({ success: false, message: "Invalid credentials" });
  } catch (error) {
    next(error);
  }
};
