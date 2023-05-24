import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

const AlertProvider = dynamic(
  () => import("@qamarz/gv-web-sdk").then((mod) => mod.AlertProvider),
  { ssr: false }
);

const Alert = dynamic(
  () => import("@qamarz/gv-web-sdk").then((mod) => mod.Alert),
  { ssr: false }
);

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AlertProvider>
      <Alert />
      <Component {...pageProps} />
    </AlertProvider>
  );
}
