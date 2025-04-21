const sql = require("better-sqlite3");
const database = sql("meals.db");

export function getAllMeals() {
  return database.prepare("SELECT * FROM meals").all();
}