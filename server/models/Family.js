const mongoose = require('mongoose');
const { Schema } = mongoose;
const recipeSchema = require('./Recipe');

const familySchema = new Schema({
  name: String,
  members: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  recipes: [recipeSchema],
  menu: [Schema.Types.ObjectId],
});

familySchema.methods.getMenu = async function () {
  const menu = [];
  for (let i = 0; i < this.menu.length; i++) {
    for (let j = 0; j < this.recipes.length; j++) {
      if (this.menu[i].toString() === this.recipes[j]._id.toString()) {
        menu.push(this.recipes[j]);
      }
    }
  }
  return menu;
};

const Family = mongoose.model('Family', familySchema);

module.exports = Family;
