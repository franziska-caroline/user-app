import Layout from "@/components/Layout";
import "@/styles/globals.css";
import useSWR from "swr";
import { SWRConfig } from "swr";

// Error Handling
const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error("What are you doing?!");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  return res.json();
};

export default function App({ Component, pageProps }) {
  const { data: users, error, isLoading } = useSWR("/api/users", fetcher);
  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>loading...</p>;

  if (!users) {
    return <div>loading...</div>;
  }

  return (
    <SWRConfig value={{ fetcher }}>
      <Layout>
        <Component {...pageProps} users={users} />
      </Layout>
    </SWRConfig>
  );
}
