/* import reactLogo from "./assets/react.svg"; */

import "./App.css";

function App() {
  async function handlePush() {
    const checkPermission = () => Notification.permission === "granted";

    if (!checkPermission()) {
      await Notification.requestPermission();
    }

    if (checkPermission()) {
      navigator.serviceWorker.ready.then((reg) => {
        reg.showNotification("My new push", { body: "batata" });
      });
    }
  }

  return (
    <div>
      <button onClick={handlePush}>Trigger push</button>
    </div>
  );
}

export default App;
