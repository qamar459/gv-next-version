import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

const AlertProvider = dynamic(
  () => import("@qamarz/gv-web-sdk").then((mod) => mod.AlertProvider),
  { ssr: false }
);

const SdkProvider = dynamic(
  () => import("@qamarz/gv-web-sdk").then((mod) => mod.SdkProvider),
  { ssr: false }
);

const groopviewKey = process.env.GROOPVIEW_KEY || "";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SdkProvider groopviewKey={groopviewKey}>
      <AlertProvider>
        <Component {...pageProps} />
      </AlertProvider>
    </SdkProvider>
  );
}
