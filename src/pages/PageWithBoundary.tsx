import { useEffect } from "react";

export default function PageWithBoundary() {
  useEffect(() => {
    console.log((window as any).lala.lulu);
  }, []);

  return <div>potato</div>;
}
