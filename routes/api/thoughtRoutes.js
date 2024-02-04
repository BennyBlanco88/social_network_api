const router = require('express').Router();
const {
    getThought,
    createThought,
    addThoughtResponse,
    removeThoughtResponse
} = require('../../controllers/thoughtController');

// /api/thought
router.route('/').get(getThought).post(createThought);

// /api/thought/:thoughtsId
router
    .route('/:thoughtId')
    .get(getThought);

// /api/thought/:thoughtsId/repsonses
router.route('/:thoughtId/responses').post(addThoughtResponse);

// /api/thought/:thoughtsId/responses/:reponseId
router.route('/:thoughtId/responses/:responseId').delete(removeThoughtResponse);

module.exports = router;

