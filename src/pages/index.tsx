import { Inter } from "next/font/google";
import { trpc } from "@/utils/trpc";

const inter = Inter({ subsets: ["latin"] });


export default function IndexPage() {
  const hello = trpc.hello.useQuery({ text: 'client' });
  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <p>{hello.data.greeting}</p>
    </div>
  );
}