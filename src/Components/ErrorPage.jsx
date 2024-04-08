import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="p-2">
      <h1 className="text-2xl font-[tanker]">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="font-medium">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
