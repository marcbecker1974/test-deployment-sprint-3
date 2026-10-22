export default function Home() {
  const greeting = process.env.NEXT_PUBLIC_GREETING ?? "Hello from Vercel";

  return (
    <main>
      <h1>{greeting}</h1>
    </main>
  );
}
