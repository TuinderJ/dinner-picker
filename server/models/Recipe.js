const mongoose = require('mongoose');

const { Schema } = mongoose;

const recipeSchema = new Schema({
  recipeId: Schema.Types.ObjectId,
  category: String,
  cookTime: String,
  created: String,
  createdBy: String,
  customerUuid: String,
  description: String,
  favorite: Boolean,
  images: [String],
  ingredients: [String],
  instructions: [
    {
      steps: [String],
    },
  ],
  lastUsed: Date,
  name: {
    type: String,
    required: true,
    trim: true,
  },
  newImages: [
    {
      hUnits: String,
      height: Number,
      length: Number,
      mime: String,
      type: String,
      url: String,
      wUnits: String,
      width: Number,
    },
  ],
  newOriginalImages: [
    {
      hUnits: String,
      height: Number,
      length: Number,
      mime: String,
      type: String,
      url: String,
      wUnits: String,
      width: Number,
    },
  ],
  originalDescription: String,
  originalIngredients: [String],
  originalInstructions: [
    {
      steps: [String],
    },
  ],
  originalName: String,
  originalTotalTime: String,
  originalYield: String,
  prepTime: String,
  totalTime: String,
  updated: String,
  url: String,
  uuid: String,
  yield: String,
});

module.exports = recipeSchema;
