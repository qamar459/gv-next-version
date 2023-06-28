import { useState } from "react";
import dynamic from "next/dynamic";

const MeetingSessionStart = dynamic(
  () => import("@qamarz/gv-web-sdk").then((mod) => mod.MeetingSessionStart),
  { ssr: false }
);

const FutureSession = dynamic(
  () => import("@qamarz/gv-web-sdk").then((mod) => mod.FutureSession),
  { ssr: false }
);

const MeetingJoin = dynamic(
  () => import("@qamarz/gv-web-sdk").then((mod) => mod.MeetingJoin),
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

const UserPreference = dynamic(
  () => import("@qamarz/gv-web-sdk").then((mod) => mod.UserPreference),
  { ssr: false }
);

type ShowComponent =
  | "friend"
  | "notification"
  | "groop"
  | "meetingSessionStart"
  | "futureSession"
  | "meetingJoin"
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
          <button
            type="button"
            value="futureSession"
            onClick={() => setShowComponent("futureSession")}
          >
            Future Gameplays
          </button>
          <button
            type="button"
            value="meetingJoin"
            onClick={() => setShowComponent("meetingJoin")}
          >
            Meeting Join
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
          streamTitle="Grand Theft Auto: Vice City added"
        />
        <FutureSession
          isOpen={showComponent === "futureSession"}
          onClose={() => setShowComponent("")}
        />
        <FutureSession
          isOpen={showComponent === "futureSession"}
          onClose={() => setShowComponent("")}
        />
        <MeetingJoin
          isOpen={showComponent === "meetingJoin"}
          onClose={() => setShowComponent("")}
        />
        <UserPreference />
      </div>
    </>
  );
}
