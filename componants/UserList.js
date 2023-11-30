import useSWR from "swr";

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
        {users.map((user) => {
          return <li>{`${user.firstName} ${user.lastName}`}</li>;
        })}
      </ul>
    </>
  );
}
