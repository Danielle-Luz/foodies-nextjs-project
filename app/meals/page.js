import Link from "next/link";
import styles from "./styles.module.css";
import { getAllMeals } from "@/api/meals";
import MealsList from "@/components/meals-list/meals-list";

export default function Meals() {
  const allMeals = getAllMeals();

  return (
    <main className="horizontal-spacing">
      <MealsList meals={allMeals} />
    </main>
  );
}