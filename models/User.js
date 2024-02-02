const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
    {
        first: String,
        last: String,
        age: Number,
        videos: [
            {
                type: Schema.Types.ObjectId,
                ref: 'video',
            },
        ],

    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

//Create a virtual property `fullName` that gets and sets the user's full name
userSchema
    .virtual('fullName')
    //Getter
    .get(function () {
        return `${this.first} ${this.last}`;
    })
    // Setter to set the first and last name
    .set(function (v) {
        const first = v.split(' ')[0];
        const last = v.split(' ')[1];
        this.set({ first, last });
    });

// Intialize our User model
const User = model('user', userSchema);

module.exports = User;