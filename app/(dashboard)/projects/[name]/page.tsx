export default function Home({ params }: { params: { name: string } }) {
  return (
    <main>
      <h1>Project {params.name}</h1>
    </main>
  );
}
