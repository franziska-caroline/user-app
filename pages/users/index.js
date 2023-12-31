import UserList from "@/components/UserList";
import useSWR from "swr";

// Error Handling
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

export default function userOverview() {
  const { data: users, error, isLoading } = useSWR("/api/users", fetcher);
  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>loading...</p>;

  console.log(users);

  if (!users) {
    return <div>loading...</div>;
  }
  return (
    <>
      <main>
        <h1>List of Users</h1>
        <UserList users={users} />
      </main>
    </>
  );
}
