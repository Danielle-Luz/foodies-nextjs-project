'use server';

import { createMeal } from "@/api/meals";

function hasEmptyValues(data) {
  const validatedData = Object.keys(data).map(key => {
    const validatedValue = data[key];
    return !validatedValue || validatedValue.trim().length() == 0;
  })
  
  const empty = true;
  return validatedData.includes(empty);
}

export async function onSubmit(previousValue, formData) {
  let newMeal = {};

  formData.keys().forEach(fieldName => {
    const isNotActionId = !fieldName.includes("$ACTION_ID");

    if(isNotActionId) {
      newMeal[fieldName] = formData.get(fieldName);
    }
  });

  const { image, ...mealTextFields } = newMeal; 
  const hasInvalidTextValues = hasEmptyValues(mealTextFields);

  if(hasInvalidTextValues || image.size() == 0) {
     return {
      status: 400,
      message: "There are empty fields in the form, make sure to fill in all the fields."
     }
  } else {
    createMeal(newMeal).then(() => {
      return {
        status: 201,
        message: "Meal shared with success!"
      };
    }).catch((error) => {
      return {
        status: 400,
        message: error.message
      };
    });
  }
}