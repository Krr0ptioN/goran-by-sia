const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("./config");

const VerifyToken = require("./verify-token");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

const User = require("./user-entity");

User.exists({ username: "admin" }).then((u) => {
  if (!u) {
    User.create({
      username: "admin",
      name: "Sia",
      email: "admin@goran.cc",
      password: bcrypt.hashSync("admin", 8),
    })
      .then((result) => {
        console.log(result);
        console.log("User created!");
      })
      .catch((e) => console.error(e));
  } else {
    console.log("Admin user already exists!");
  }
});

router.post("/login", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({ username })
    .then((user) => {
      if (!user)
        return res.status(401).send({ message: "Invalid credentials" });

      const passwordIsValid = bcrypt.compareSync(password, user?.password);
      if (!passwordIsValid) {
        res.status(401).send("Invalid credentials");
      } else {
        const token = jwt.sign({ id: user._id }, config.SECRET, {
          expiresIn: config.TOKEN_EXPIRY,
        });
        res.status(200).send({
          username,
          name: user.name,
          email: user.email,
          token: token,
        });
      }
    })
    .catch((_) => res.status(500).send({ message: "Error on the server." }));
});

router.get("/logout", (req, res) =>
  res.status(200).send({ auth: false, token: null }),
);

router.post("/register", function (req, res) {
  const hashedPassword = bcrypt.hashSync(req.body.password, 8);

  User.exists({ username: req.body.username }).then((doesExists) => {
    if (!doesExists) {
      User.create(
        {
          username: req.body.username,
          name: req.body.name,
          email: req.body.email,
          password: hashedPassword,
        },
        function (err, user) {
          if (err) {
            return res
              .status(500)
              .send({ message: "There was a problem registering the user." });
          }

          const token = jwt.sign({ id: user._id }, config.SECRET, {
            expiresIn: config.TOKEN_EXPIRY,
          });

          res.status(200).send({ auth: true, token: token });
        },
      );
    } else {
      res.status(209).send({ message: "already exists" });
    }
  });
});

router.get("/me", VerifyToken, function (req, res, next) {
  User.findById(req.userId, { password: 0 }, function (err, user) {
    if (err) {
      return res
        .status(500)
        .send({ message: "There was a problem finding the user." });
    }
    if (!user) {
      return res.status(404).send({ message: "No user found." });
    }
    res.status(200).send(user);
  });
});

module.exports = router;
