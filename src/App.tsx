/* import reactLogo from "./assets/react.svg"; */

import "./App.css";

function App() {
  async function handlePush(withTimer = false) {
    const checkPermission = () => Notification.permission === "granted";

    if (!checkPermission()) {
      await Notification.requestPermission();
    }

    if (checkPermission()) {
      triggerPush(withTimer);
    }
  }

  function triggerPush(withTimer = false) {
    navigator.serviceWorker.ready.then((reg) => {
      reg.active?.postMessage({
        action: "triggerPush",
        withSchedule: withTimer,
      });
    });
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
      <button onClick={() => handlePush()}>Trigger push</button>
      <button onClick={() => handlePush(true)}> Trigger push with timer</button>
    </div>
  );
}

export default App;
