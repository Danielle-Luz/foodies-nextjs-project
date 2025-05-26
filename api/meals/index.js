const sql = require("better-sqlite3");
const database = sql("meals.db");

export function getAllMeals() {
  return database.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return database.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export function createMeal(newMeal) {
  const whiteSpaceRegex = /\s/g;
  const nonLetterCharactersRegex = /[^a-zA-Z]/g;

  const titleWithoutSpaces = newMeal.title.toLowerCase().replace(whiteSpaceRegex, "-");
  const titleOnlyWithLetters = titleWithoutSpaces.replace(nonLetterCharactersRegex, "");
  newMeal.slug = titleOnlyWithLetters;

  const insertStatement = database.prepare(`
    INSERT INTO meals  
    (slug, title, image, summary, instructions, creator, creator_email)
    VALUES
      @slug,
      @title,
      @image,
      @summary,
      @instructions,
      @creator,
      @creator_email
  `);

  insertStatement.run(newMeal);
}