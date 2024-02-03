const { Schema, model } = require('mongoose');
const Response = require('./Response');


/// thought schema
const thoughtSchema = new Schema (
    {
      thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
      },
      username: {
        type: String,
        required: true,
      },
      responses: [Response],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
)

//Create a virtual property `responses` that gets the amout of reponse per thoughts
thoughtSchema
    .virtual('getResponses')
    //Getter
    .get(function () {
        return this.responses.length;
    });

//Initialize our thought model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;