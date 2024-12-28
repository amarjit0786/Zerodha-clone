const { model } = require("mongoose");
const bcrypt = require("bcrypt");
const { UserSchema } = require("../schemas/UserSchema");

// Use regular function, not an arrow function, to preserve `this` context
UserSchema.pre("save", async function(next) {
    if (!this.isModified('password')) {
        return next(); // If password is not modified, skip hashing
    }

    try {
        this.password = await bcrypt.hash(this.password, 12); // Hash the password
        next(); // Continue with the save operation
    } catch (error) {
        next(error); // Pass any error to the next middleware
    }
});

const UserModel = model("user", UserSchema);

module.exports = { UserModel };
