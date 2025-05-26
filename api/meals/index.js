const fs = require("fs");
const sql = require("better-sqlite3");
const database = sql("meals.db");

export function getAllMeals() {
  return database.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return database.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function createMeal(newMeal) {
  const whiteSpaceRegex = /\s/g;
  const nonLetterCharactersRegex = /[^a-zA-Z]/g;

  const titleWithoutSpaces = newMeal.title.toLowerCase().replace(whiteSpaceRegex, "-");
  const titleOnlyWithLetters = titleWithoutSpaces.replace(nonLetterCharactersRegex, "");
  newMeal.slug = titleOnlyWithLetters;

  const imageFileName =` ${titleOnlyWithLetters}.${imageFormat}`;
  const imageFormat = newMeal.image.name.split(".").pop();
  const imageStream = fs.createWriteStream(`public/images/${imageFileName}`);
  const bufferedImage = await newMeal.image.arrayBuffer();

  imageStream.write(Buffer.from(bufferedImage), (error) =>  {
      if(error) {
        new Error("An error happened while saving the image");
      }
    }
  );

  newMeal.image = `images/${imageFileName}`;

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