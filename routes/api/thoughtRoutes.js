const router = require('express').Router();
const {
    getThought,
    createThought,
    addThoughtResponse,
    removeThoughtResponse
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThought).post(createThought);

// /api/thoughts/:thoughtsId
router
    .route('/:thoughtsId')
    .get(getThought);

// /api/thoughts/:thoughtsId/repsonses
router.route('/:thoughtId/responses').post(addThoughtResponse);

// /api/thoughts/:thoughtsId/responses/:reponseId
router.route('/:thoughtId/responses/:responseId').delete(removeThoughtResponse);

module.exports = router;

