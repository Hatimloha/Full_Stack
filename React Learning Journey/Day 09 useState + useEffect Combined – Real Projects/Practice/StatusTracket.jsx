// 1. Online/Offline Status Tracker
// Shows user's internet status using navigator.onLine.
import React from 'react'
import { useState, useEffect } from 'react';

function StatusTracket() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return <h2>{isOnline ? "🟢 Online" : "🔴 Offline"}</h2>;
}

export default StatusTracket