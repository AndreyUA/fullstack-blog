const express = require("express");

const auth = require("../middleware/auth");
const User = require("../models/User");

const router = express();

// @route       GET api/profile/id
// @desc        Get user from database by id
// @access      Private
router.get("/:id", auth, async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");

    if (!user) {
      return res.status(404).json({ errors: [{ msg: "User not found" }] });
    }

    res.json(user);
  } catch (error) {
    console.log(error.message);

    res.status(500).send("Server error");
  }
});

// @route       PUT api/profile/id
// @desc        Change user's profile by id
// @access      Private
router.put("/:id", auth, async (req, res) => {
  const { name, status, birthday, adress } = req.body;

  try {
    const user = await User.findById(req.params.id).select("-password");

    if (!user) {
      return res.status(404).json({ errors: [{ msg: "User not found" }] });
    }

    // check user
    if (req.params.id !== req.user.id) {
      return res.status(401).json({ errors: [{ msg: "User not authorized" }] });
    }

    user.name = name;
    user.status = status;
    user.birthday = birthday;
    user.adress = adress;

    await user.save();

    res.json(user);

    // все рабочее уже, но еще не правильно как-то реагирует смена статуса
    // проверяй в постмане
  } catch (error) {
    console.log(error.message);

    if (error.kind === "ObjectId") {
      return res.status(404).json({ msg: "User not found" });
    }

    res.status(500).send("Server error");
  }
});

module.exports = router;
