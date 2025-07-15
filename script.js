function setAlarm(time, message) {
  const now = new Date();
  const alarmTime = new Date(time);

  const delay = alarmTime - now;

  if (delay <= 0) {
    console.log("⏰ Alarm time has already passed.");
    return;
  }

  setTimeout(() => {
    console.log("🔔 " + message);
  }, delay);
}

// Example
setAlarm("2025-06-30T23:30:00", "Time to sleep!");