"use client";

import {
  Friend,
  Groop,
  Notification,
  MeetingSessionStart,
} from "@qamarz/gv-web-sdk";
import { useState } from "react";

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
        <Groop
          isOpen={showComponent === "groop"}
          onClose={() => setShowComponent("")}
        />
        <Notification
          isOpen={showComponent === "notification"}
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
