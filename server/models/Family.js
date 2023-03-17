const mongoose = require('mongoose');
const { Schema } = mongoose;
const recipeSchema = require('./Recipe');

const familySchema = new Schema({
  name: String,
  members: [Schema.Types.ObjectId],
  recipes: [{ type: Schema.Types.ObjectId, ref: 'recipe' }],
  menu: [Schema.Types.ObjectId],
  menuType: String,
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

familySchema.methods.makeMenu = async function ({ recipes, numberOfMenuItems, menuType }) {
  let recipeList = [...recipes];
  this.menu = [];
  for (let i = 0; i < numberOfMenuItems; i++) {
    const randomNumber = Math.floor(Math.random() * recipeList.length);
    this.menu.push(recipeList[randomNumber]._id);
    if (numberOfMenuItems <= recipeList.length) recipeList = recipeList.filter(recipe => recipe._id !== recipeList[randomNumber]._id);
  }
  this.menuType = menuType;
  this.save();
};

const Family = mongoose.model('family', familySchema);

module.exports = Family;
