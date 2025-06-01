import { ImgurClient } from 'imgur';
import xss from "xss";

const fs = require("fs");
const sql = require("better-sqlite3");
const database = sql("meals.db");

export function getAllMeals() {
  return database.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return database.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function getImageAsBase64(image) {
  const imageBytes = await image.bytes();
  let binary = "";

  imageBytes.forEach((byte) => {
    binary += String.fromCharCode(byte)
  });

  return btoa(binary);
}

export async function getUploadedImageLink(image) {
  try {
    const imgurClient = new ImgurClient({ clientId: process.env.IMGUR_CLIENT_ID });

    const imageAsBase64 = await getImageAsBase64(image);

    const uploadedImage = await imgurClient.upload({
      image: imageAsBase64,
      type: "base64"
    });

    return uploadedImage.data.link;
  } catch {
    new Error("An error happened while saving the image");
  }
}

export async function createMeal(newMeal) {
  const whiteSpaceRegex = /\s/g;
  const nonLetterCharactersRegex = /[^a-zA-Z]/g;

  const titleWithoutSpaces = newMeal.title.toLowerCase().replace(whiteSpaceRegex, "-");
  const titleOnlyWithLetters = titleWithoutSpaces.replace(nonLetterCharactersRegex, "");

  newMeal.instructions = xss(newMeal.instructions);
  newMeal.slug = titleOnlyWithLetters;

  const imageLink = await getUploadedImageLink(newMeal.image);
  newMeal.image = imageLink;

  const insertStatement = database.prepare(`
    INSERT INTO meals  
    (slug, title, image, summary, instructions, creator, creator_email)
    VALUES(
      @slug,
      @title,
      @image,
      @summary,
      @instructions,
      @creator,
      @creator_email
    )
  `);

  insertStatement.run(newMeal);
}