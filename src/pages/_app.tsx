import "@/styles/globals.css";
import { trpc } from "@/utils/trpc";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return <><Component {...pageProps} /><style jsx>{styles}</style></>;
}

export default trpc.withTRPC(App);

const styles = `
  div {
    font-family: 'system-ui';
    width: 90vw;
    margin-inline: auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h1, h2, p, a {
    margin-block: 0.5rem;
  }
  p {
    line-height: 1.5;
  }
  a {
    text-decoration: none;
  }
  form {
    display: grid;
    grid-template-columns: 1fr 6fr;
    gap: 1rem;
    margin-block: 1rem;
  }
`;