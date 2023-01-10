import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  interface Error {
    statusText?: string;
    message: string;
  }

  const error = useRouteError();
  const errorTypeAssertion = error as Error
  console.error(error);

  return (
    <div id="error-page">
      <h1 className="mb-3 sm:mb-4">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorTypeAssertion.statusText || errorTypeAssertion.message}</i>
      </p>
    </div>
  );
}