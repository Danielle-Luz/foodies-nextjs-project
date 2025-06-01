'use server';

import { createMeal } from "@/api/meals";

function hasEmptyValues(data) {
  const validatedData = Object.keys(data).map(key => {
    const validatedValue = data[key];
    return !validatedValue || validatedValue.trim().length == 0;
  })
  
  const empty = true;
  return validatedData.includes(empty);
}

export async function onSubmit(previousValue, formData) {
  let newMeal = {};

  formData.keys().forEach(fieldName => {
    const formFieldNames = ["creator", "creator_email", "title", "summary", "instructions", "image"]
    const isFormField = formFieldNames.includes(fieldName);

    if(isFormField) {
      newMeal[fieldName] = formData.get(fieldName);
    }
  });

  const { image, ...mealTextFields } = newMeal; 
  const hasInvalidTextValues = hasEmptyValues(mealTextFields);
  const hasInvalidImage = image?.size == 0;

  if(hasInvalidTextValues || hasInvalidImage) {
     return {
      status: "error",
      message: "There are empty fields in the form, make sure to fill in all the fields."
     }
  } else {
    try {
      createMeal(newMeal);

      revalidatePath("/meals");

      return {
        status: "success",
        message: "Meal shared with success!"
      }
    } catch (error) {
      return {
        status: "error",
        message: error.message
      }
    }
  }
}