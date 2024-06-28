const express = require("express");
const router = express.Router();

// Controllers
const pages = new (require("../app/controllers/pages"))();
const auth  = new (require('../app/controllers/auth'))
const admin  = new (require('../app/controllers/admin'))

router.get("/", pages.welcome, admin.dashboard);
router.get('/register', auth.register)
router.get('/login', auth.login)

module.exports = router;
