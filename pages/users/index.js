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


function handleAddUser(newUser) {
  setUser([{ id: uid(), date, ...newUser }, ...users]);
}


export default function userOverview() {
  // const [users, setUsers] = useLocalStorageState("users", {
  //   defaultValue: users,
  // });
  // const [filter, setFilter] = useLocalStorageState("filter", {
  //   defaultValue: "all",
  // });


  const { data: users, error, isLoading } = useSWR("/api/users", fetcher);
  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>loading...</p>;


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
