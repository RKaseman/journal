
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: "Username is Required"
    },
    password: {
        type: String,
        trim: true,
        required: "Password is Required",
        validate: [
            function (input) {
                return input.length >= 6;
            },
            "Password should be longer."
        ]
    },
    userCreated: {
        type: Date,
        default: Date.now
    },
    lastUpdated: Date,
});

// Custom Instance Methods

UserSchema.methods.lastUpdatedDate = function () {
    this.lastUpdated = Date.now();
    return this.lastUpdated;
};

var User = mongoose.model("User", UserSchema);

module.exports = User;
