const router = require('express').Router();
const {
    getThoughts,
    createThoughts,
    addThoughtResponse,
    removeThoughtResponse
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThoughts);

// /api/thoughts/:thoughtsId
router
    .route('/:thoughtsId')
    .get(getThoughts);

// /api/thoughts/:thoughtsId/repsonses
router.route('/:thoughtsId/responses').post(addThoughtResponse);

// /api/thoughts/:thoughtsId/responses/:reponseId
router.route('/:thoughtsId/responses/:responseId').delete(removeThoughtResponse);

module.exports = router;

