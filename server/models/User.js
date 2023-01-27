const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const recipeSchema = require('./Recipe');

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  recipes: [recipeSchema],
  menu: [Schema.Types.ObjectId],
});

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.getMenu = async function () {
  const menu = [];
  for (let i = 0; i < this.recipes.length; i++) {
    if (this.menu.includes(this.recipes[i]._id.toString())) menu.push(this.recipes[i]);
  }
  return menu;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
