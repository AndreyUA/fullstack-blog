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
  const { name, status, birthday, country, city } = req.body;

  try {
    const user = await User.findById(req.params.id).select("-password");

    if (!user) {
      return res.status(404).json({ errors: [{ msg: "User not found" }] });
    }

    // check user
    if (req.params.id !== req.user.id) {
      return res.status(401).json({ errors: [{ msg: "User not authorized" }] });
    }

    // check status length
    if (status.text && status.text.split(" ").length > 40) {
      return res
        .status(400)
        .json({ errors: [{ msg: "Your status is too long" }] });
    }

    user.name = name;

    if (status.text) {
      if (user.status.text !== status.text) {
        user.status = {
          text: status.text,
          date: Date.now(),
        };
      }
    }

    user.birthday = birthday;
    user.country = country;
    user.city = city;

    await user.save();

    res.json(user);
  } catch (error) {
    console.log(error.message);

    if (error.kind === "ObjectId") {
      return res.status(404).json({ msg: "User not found" });
    }

    res.status(500).send("Server error");
  }
});

module.exports = router;
