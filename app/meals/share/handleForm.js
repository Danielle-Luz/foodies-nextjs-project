'use server';

export async function onSubmit(formData) {
  let newMeal = {};

  formData.keys().forEach(fieldName => {
    const isNotActionId = !fieldName.includes("$ACTION_ID");

    if(isNotActionId) {
      newMeal[fieldName] = formData.get(fieldName);
    }
  });
}