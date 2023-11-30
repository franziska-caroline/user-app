import UserCard from "../UserCard/index.js.js";
import Link from "next/link.js";

export default function UserList({ users }) {
  return (
    <>
      <ul>
        <li>
          <Link href={`/users/${users.id}`}>
            {users.firstName} {users.lastName}
          </Link>
        </li>
      </ul>
    </>
  );
}
