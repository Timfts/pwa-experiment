/* import reactLogo from "./assets/react.svg"; */

import "./App.css";

function App() {
  function triggerPush() {
    navigator.serviceWorker.ready.then((reg) => {
      reg.showNotification("My new push", { body: "batata" });
    });
  }

  function timer(time: number) {
    return new Promise((res) => {
      const t = setTimeout(() => {
        clearTimeout(t);
        res(undefined);
      }, time);
    });
  }

  async function handlePush(withTimer = false) {
    const checkPermission = () => Notification.permission === "granted";

    if (!checkPermission()) {
      await Notification.requestPermission();
    }

    if (checkPermission()) {
      if (withTimer) await timer(30000);
      triggerPush();
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
      <button onClick={() => handlePush()}>Trigger push</button>
      <button onClick={() => handlePush(true)}> Trigger push with timer</button>
    </div>
  );
}

export default App;
