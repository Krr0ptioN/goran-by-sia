const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

const verifyToken = require("./verify-token");

router.use(bodyParser.urlencoded({ extended: true }));
var User = require("./user-entity");

router.post("/", function createNewUser(req, res) {
  User.create(
    {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    },
    (err, user) => {
      if (err) {
        return res
          .status(500)
          .send("There was a problem adding the information to the database.");
      }
      res.status(200).send(user);
    },
  );
});

router.get("/", function getAllUsers(req, res) {
  User.find({}, (err, users) => {
    if (err) {
      return res.status(500).send("There was a problem finding the users.");
    }
    res.status(200).send(users);
  });
});

router.get("/:id", function getUser(req, res) {
  User.findById(req.params.id, (err, user) => {
    if (err) {
      return res.status(500).send("There was a problem finding the user.");
    }
    if (!user) {
      return res.status(404).send("No user found.");
    }
    res.status(200).send(user);
  });
});

router.delete("/:id", function deleteUser(req, res) {
  User.findByIdAndRemove(req.params.id, (err, user) => {
    if (err) {
      return res.status(500).send("There was a problem deleting the user.");
    }
    res.status(200).send("User: " + user.name + " was deleted.");
  });
});

router.put("/:id", function updateUser(req, res) {
  User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, user) => {
      if (err) {
        return res.status(500).send("There was a problem updating the user.");
      }
      res.status(200).send(user);
    },
  );
});

module.exports = router;
