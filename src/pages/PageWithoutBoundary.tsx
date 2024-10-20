import { useEffect } from "react";

export default function PageWithoutBoundary() {
  useEffect(() => {
    console.log((window as any).lala.lulu);
  }, []);
  
  function throwError() {
    console.log((window as any).lala.lulu);
  }

  return (
    <div>
      <button onClick={throwError}>throw error</button>
    </div>
  );
}
