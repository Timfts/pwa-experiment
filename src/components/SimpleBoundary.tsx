import { useRouteError } from "react-router-dom";

export default function SimpleBoundary() {
  const error = useRouteError();
  console.error(error);
  return <div>Something went wrong</div>;
}
