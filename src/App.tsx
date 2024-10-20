/* import reactLogo from "./assets/react.svg"; */

import "./App.css";

function App() {
  function triggerPush() {
    console.log("opa 1");
    navigator.serviceWorker.ready.then((reg) => {
      console.log("opa 2");
      reg.showNotification("My new push", { body: "batata" });
    });
  }

  async function handlePush() {
    const checkPermission = () => Notification.permission === "granted";

    if (!checkPermission()) {
      await Notification.requestPermission();
    }

    if (checkPermission()) {
      triggerPush();
    }
  }

  function handleTimer() {
    navigator.serviceWorker.ready.then((reg) => {
      reg.active?.postMessage({ action: "triggerSchedule" });
    });
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
      <button onClick={handlePush}>Trigger push</button>
      <button onClick={handleTimer}> Trigger push with timer</button>
    </div>
  );
}

export default App;
