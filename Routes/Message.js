const { Router } = require("express");
const router = Router();
const { check, validationResult } = require("express-validator");
const User = require("../models/Message");
const Objects = require("../models/Objects");
const config = require("config");
const Team=require("../models/Team");
const UserObjRegOrLog = require("../models/LogReg");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
router.post(
  "/message",
  [check("email", "Некорректный email").isEmail()],
  async (req, res) => {
    try {
      let errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array,
          message: "Некорректные данные"
        });
      }
      let { name, email, phone, message } = req.body;
      if (!message) {
        message=" "
        console.log(message)
      }
      let user = new User({ name, email, phone, message });
      await user.save();
      res.status(201).json({ message: "Сообщение отправлено" });
    } catch (e) {
      res.status(500).json({ message: "Что-то пошло не так,попробуйте снова" });
    }
  }
);
router.get("/getTeam",async (req,res)=>{
  try {
    let data= await Team.find();

    res.status(201).json({message:data})
  }
  catch (e) {
    console.log(e)
    res.status(500).json({ message: "Что-то пошло не так,попробуйте снова" });
  }
})
router.post("/SendObj", async (req, res) => {
  try {
    let {name, secondName, type, pass, district, size, phone, ImgSrc, cost, rooms, street, countApp, house} = req.body;
    let all = [name, secondName, type, district, size, phone, ImgSrc, cost, rooms, street, countApp, house];
    for (let i = 0; i < all.length; i++) {
      if (!all[i]) {
        return res.status(400).json({ message: "Не все данные были заполнены" });
      }
    }
    let obj = new Objects({street, house, countApp, district, type, rooms, cost, size, name, secondName, phone, imgSrc: ImgSrc});
    let user = await UserObjRegOrLog.findOne({ login: config.get("login") });
    let like = await bcrypt.compare(pass, user.password);
    if (!like) {
      return res.status(400).json({ message: "Неверно введен пароль" });
    }
    await obj.save();
    res.status(201).json({ message: "Объект сохранен" });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Что-то пошло не так,попробуйте снова" });
  }
});
router.get("/objects", async (req, res) => {
  try {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array,
        message: "Ошибка"
      });
    }
    let data = await Objects.find();
    res.status(201).json({ message: data });
  } catch (e) {
    res.status(500).json({ message: "Что-то пошло не так,попробуйте снова" });
  }
});
router.post("/personalObjects", async (req, res) => {
  try {
    let { id } = req.body;
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array,
        message: "Ошибка"
      });
    }
    let data = await Objects.findById(id, function(err, adventure) {});
    res.status(201).json({ message: data });
  } catch (e) {
    res.status(500).json({ message: "Что-то пошло не так,попробуйте снова" });
    console.log(e);
  }
});
router.post("/register", async (req, res) => {
  try {
    let { loginText, passwordText } = req.body;
    let cand = await UserObjRegOrLog.findOne({ loginText });
    if (cand) {
      return res
        .status(404)
        .json({ message: "Такой пользователь уже существует" });
    }
    let HashedPass = await bcrypt.hash(passwordText, 11);
    let userObj = new UserObjRegOrLog({
      login: loginText,
      password: HashedPass
    });
    await userObj.save();
    res.status(201).json({ message: "Пользователь зарегистрирован" });
  } catch (e) {
    res.status(500).json({ message: "Что-то пошло не так,попробуйте снова" });
  }
});
router.post(
  "/login",
  [check("email", "Некорректный email").isEmail()],
  async (req, res) => {
    try {
      let { login, password } = req.body;
      let user = await UserObjRegOrLog.findOne({ login});
      if (!user) {
        return res.status(400).json({ message: "Неверно введен логин или пароль" });
      }
      let like = await bcrypt.compare(password, user.password);
      if (!like) {
        return res
          .status(400)
          .json({ message: "Неверно введен логин или пароль" });
      }
      let token = jwt.sign({ userId: user.id }, config.get("jwtSecretCode"), {
        expiresIn: "1h"
      });
      res.json({ token, userId: user.id });
    } catch (e) {
      res.status(500).json({ message: "Что-то пошло не так,попробуйте снова" });
    }
  }
);
module.exports = router;
