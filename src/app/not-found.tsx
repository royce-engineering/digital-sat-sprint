import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container hero">
      <p className="eyebrow">Lesson not found</p>
      <h1>This SAT lesson has not been added yet.</h1>
      <p className="heroText">
        Return to the course homepage and choose an available day.
      </p>
      <div className="heroActions">
        <Link className="button buttonPrimary" href="/">
          Return home
        </Link>
      </div>
    </main>
  );
}
