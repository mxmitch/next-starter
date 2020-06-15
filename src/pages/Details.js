import Link from "next/link";

const people = [
  { v: "car", name: "Mitch" },
  { v: "bike", name: "Bev" },
  { v: "plane", name: "Jane" }
];

export default function Details() {
  return (
    <div>
      {people.map((e) => (
        <div>
          <Link as={`/${e.v}/${e.name}`} href="/[vehicle]/[person]">
            <a>Navigate to {e.name}'s Car</a>
          </Link>
        </div>
      ))}
    </div>
  );
}
