"use client";

import { useEffect, useRef } from "react";

const WIDGET_SRC = "https://scottw.alignrightinfinity.com/listing";

export default function LoftyIDXWidget() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    function handleMessage(e: MessageEvent) {
      try {
        const data = JSON.parse(e.data);
        if (
          data.from === "chimeSite" &&
          data.event === "updateBodyRect" &&
          iframeRef.current
        ) {
          iframeRef.current.style.height = data.data.height + "px";
        }
      } catch {
        // ignore non-JSON messages
      }
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src={WIDGET_SRC}
      id="chimeWidget"
      frameBorder={0}
      title="MLS Home Search — Harrison Ohio"
      style={{ width: "100%", minHeight: 800 }}
      className="w-full border-0"
    />
  );
}
