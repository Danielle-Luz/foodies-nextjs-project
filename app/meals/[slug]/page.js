import { getMeal } from "@/api/meals";
import Image from "next/image";

export default async function SelectedMeal(props) {
  const params = await props.params;
  const meal = getMeal(params.slug);

  return (
    <main>
      <article>
        <Image src={meal.image} alt={meal.title} fill />
        <article>
          <h2></h2>
        </article>
      </article>
    </main>
  );
}