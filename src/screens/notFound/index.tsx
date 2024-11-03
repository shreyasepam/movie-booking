import React from "react";
import INotFoundProps from "./INotFound.props";
import { Link } from "react-router-dom";

const NotFound: React.FC<INotFoundProps> = () => {
  return (
    <div className="text-center bg-blue-base p-6 rounded">
      <p className="text-white font-semibold text-lg">
        Content not found.{" "}
        <Link className="underline " to={"/"}>
          {"Go home🎥"}
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
