import UserCard from "../UserCard/index.js.js";
import Link from "next/link.js";

export default function UserList({ users }) {
  console.log(users);
  return (
    <>
      <ul>
        {users.map((user) => {
          return (
            <li>
              <Link href={`/users/${user.id}`}>
                {user.firstName} {user.lastName}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
