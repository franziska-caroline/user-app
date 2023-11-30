import { formatDate } from "@/lib/utils";

export default function UserCard({ user }) {
  return (
    <>
      <h1>
        {user.firstName}
        {user.lastName}
      </h1>
      <p>email:{user.email}</p>
      <p>age:{user.age}</p>
      <p>member: {formatDate(user.createdAt)} </p>
    </>
  );
}
