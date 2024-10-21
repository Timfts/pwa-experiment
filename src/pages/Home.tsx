import redlinelogo from "../assets/redline-logo.svg";

export default function Home() {
  function triggerPush(withTimer = false) {
    const isDesktop = matchMedia("(min-width: 600px)");

    navigator.serviceWorker.ready.then((reg) => {
      reg.active?.postMessage({
        action: "triggerPush",
        withSchedule: withTimer,
        icon: isDesktop ? "/favicon.svg" : null,
      });
    });
  }

  async function handlePush(withTimer = false) {
    const checkPermission = () => Notification.permission === "granted";

    if (!checkPermission()) {
      await Notification.requestPermission();
    }

    if (checkPermission()) {
      triggerPush(withTimer);
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
      <div style={{ width: "300px", height: "300px" }}>
        <img style={{ width: "100%" }} src={redlinelogo} />
      </div>
      <button onClick={() => handlePush()}>Trigger push</button>
      <button onClick={() => handlePush(true)}> Trigger push with timer</button>
    </div>
  );
}
