export default function Home() {
  const greeting =
    process.env.NEXT_PUBLIC_GREETING ?? "Hello from my first Vercel deployment";

  return (
    <main>
      <h1>{greeting}</h1>
      <p>I am pretty excited and pumped</p>
    </main>
  );
}
