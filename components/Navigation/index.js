import Link from "next/link";

export default function Navigation() {
  return (
    <footer>
      <ul>
        <li>
          <Link href="/create">Create</Link>
        </li>
        <li>
          <Link href="/users">Browse</Link>
        </li>
      </ul>
    </footer>
  );
}
