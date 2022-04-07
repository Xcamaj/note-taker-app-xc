const router = require('express').Router();
const noteroutes = require('./noteroutes')

router.use(noteroutes);

module.exports = router