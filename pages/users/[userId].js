import { formatDate } from "@/lib/utils";

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
  } = useSWR(`/api/users${userId}`, fetcher);

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>loading...</p>;

  if (!user) {
    return <div>loading...</div>;
  }

  return (
    <>
      <UserCard user={user} />
      <Link href="/">Back to all</Link>
    </>
  );
}
