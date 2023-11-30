import { formatDate } from "@/lib/utils";

export default function UserCard({ selectedUser }) {
  return (
    <>
      <h1>
        {selectedUser.firstName}
        {selectedUser.lastName}
      </h1>
      <p>email:{selectedUser.email}</p>
      <p>age:{selectedUser.age}</p>
      <p>member: {formatDate(selectedUser.createdAt)} </p>
    </>
  );
}
