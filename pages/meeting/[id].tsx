import dynamic from "next/dynamic";

const MeetingContainer = dynamic(
  () => import("@qamarz/gv-web-sdk").then((mod) => mod.MeetingContainer),
  { ssr: false }
);

export default function MeetingSession() {
  return <MeetingContainer />;
}
