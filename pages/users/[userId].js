import { useRouter } from "next/router";
import useSWR from "swr";
import UserCard from "@/components/UserCard/index.js";
import Link from "next/link";

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

export default function userDetail() {
  const router = useRouter();
  const { userId } = router.query;

  const {
    data: user,
    error,
    isLoading,
  } = useSWR(`/api/users/${userId}`, fetcher);

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>loading...</p>;

  if (!user) {
    return <div>loading...</div>;
  }
  return (
    <>
      <UserCard selectedUser={user} />
      <Link href="/users">Back to all</Link>
    </>
  );
}
