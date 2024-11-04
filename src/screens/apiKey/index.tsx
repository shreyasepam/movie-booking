import { FC } from "react";

const ApiKey: FC = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-center font-bold text-white text-2xl">
        Generate api key
      </h2>
      <div className="grid grid-cols-12 p-4 bg-blue-base mt-2 rounded max-w-xl text-white gap-2">
        <div className="col-span-1 text-white">1.</div>
        <div className="col-span-11">
          Go to{" "}
          <b>
            <a
              className="underline"
              href="https://developer.themoviedb.org/docs/getting-started"
              target="_"
            >
              TMDB
            </a>
          </b>
        </div>
        <div className="col-span-1">2.</div>
        <div className="col-span-11">
          Create an account in{" "}
          <b>
            <a
              className="underline"
              href="https://developer.themoviedb.org/docs/getting-started"
              target="_"
            >
              TMDB
            </a>
          </b>
        </div>
        <div className="col-span-1">3.</div>
        <div className="col-span-11">
          Go to{" "}
          <b>
            <a
              className="underline"
              href="https://www.themoviedb.org/settings/api"
              target="_"
            >
              Api Settings
            </a>
          </b>
        </div>
        <div className="col-span-1">4.</div>
        <div className="col-span-11">
          Copy the <b>API Read Access Token</b> and paste in <b>.env</b> file of
          code and restart the application.
        </div>
      </div>
    </div>
  );
};

export default ApiKey;
