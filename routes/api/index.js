const router = require('express').Router();
const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');
const Response = require('./Response')

router,use('/Response', Response);
router.use('/thoughts', thoughtRoutes);
router.use('/user', userRoutes);

module.exports = router;