import { useState } from "react";
import dynamic from "next/dynamic";

const MeetingSessionStart = dynamic(
  () => import("@qamarz/gv-web-sdk").then((mod) => mod.MeetingSessionStart),
  { ssr: false }
);

const Friend = dynamic(
  () => import("@qamarz/gv-web-sdk").then((mod) => mod.Friend),
  { ssr: false }
);

const Notification = dynamic(
  () => import("@qamarz/gv-web-sdk").then((mod) => mod.Notification),
  { ssr: false }
);

const Groop = dynamic(
  () => import("@qamarz/gv-web-sdk").then((mod) => mod.Groop),
  { ssr: false }
);

type ShowComponent =
  | "friend"
  | "notification"
  | "groop"
  | "meetingSessionStart"
  | "";

export default function Dashboard() {
  const [showComponent, setShowComponent] = useState<ShowComponent>("");

  return (
    <>
      <div className="dashMarginTop"></div>
      <div className="main-content">
        <div className="buttons-box">
          <button
            type="button"
            value="Friends"
            onClick={() => setShowComponent("friend")}
          >
            Friends
          </button>
          <button
            type="button"
            value="Notification"
            onClick={() => setShowComponent("notification")}
          >
            Notifications
          </button>
          <button
            type="button"
            value="Groops"
            onClick={() => setShowComponent("groop")}
          >
            Groops
          </button>
          <button
            type="button"
            value="Dashboard"
            onClick={() => setShowComponent("meetingSessionStart")}
          >
            Start Meeting Session
          </button>
        </div>
        <Friend
          isOpen={showComponent === "friend"}
          onClose={() => setShowComponent("")}
        />

        <Notification
          isOpen={showComponent === "notification"}
          onClose={() => setShowComponent("")}
        />
        <Groop
          isOpen={showComponent === "groop"}
          onClose={() => setShowComponent("")}
        />
        <MeetingSessionStart
          isOpen={showComponent === "meetingSessionStart"}
          onClose={() => setShowComponent("")}
        />
      </div>
    </>
  );
}
