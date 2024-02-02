const { Schema, model } = require('mongoose');
const Response = require('./Response');

// Schema to create Post model
const thoughtSchema = new Schema(
    {
        published: {
            type: Boolean,
            default: false,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        advertiserFriendly: {
            type: Boolean,
            default: true,
        },
        description: {
            type: String,
            minLength: 15,
            maxLength: 500,
        },
        responses: [Response],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

//Create a virtual property `responses` that gets the amout of reponse per thoughts
thoughtSchema
    .virtual('getResponses')
    //Getter
    .get(function () {
        return this.responses.length;
    });

//Initialize our thought model
const thoughts = model('thought', thoughtSchema);

module.exports = Video;