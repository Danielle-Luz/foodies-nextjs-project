export default async function SelectedMeal(props) {
  const params = await props.params;

  return (
    <main>
      <h1>{params.id}</h1>
    </main>
  );
}