import useSWR from "swr";
import UserCard from "./UserCard";

const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  return res.json();
};

export default function UserList() {
  const { data: users, error, isLoading } = useSWR("/api/users", fetcher);

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>loading...</p>;

  if (!users) {
    return <div>loading...</div>;
  }

  return (
    <>
      <ul>
        {users.map((user) => (
          <UserCard key={`user-${user.id}`} user={user} />
        ))}
      </ul>
    </>
  );
}
