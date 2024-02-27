import { Inter } from "next/font/google";
import { trpc as t }  from "@/utils/trpc";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });


export default function IndexPage() {
  const result = t.user.greet.useQuery({ name: "Client" });
  if (result.isLoading) {
    return (
        <div>
            <h1>Loading...</h1>
        </div>
    );
}

return (
    <div>
        <h1>{result.data?.text}</h1>
        <Link href="/posts/new">Create a new post</Link>
        <Link href="/posts">View all posts</Link>
    </div>
);
}
