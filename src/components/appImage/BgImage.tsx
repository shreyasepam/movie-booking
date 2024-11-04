import { FC } from "react";
import { IBgImageProps } from "./iAppImage.props";
import getConfig from "../../envConfig";

const BgImage: FC<IBgImageProps> = ({ path, className, children }) => {
  const config = getConfig();
  return (
    <div className={`relative ${className}`}>
      <div
        data-testid="background-image"
        className="absolute inset-0 bg-cover bg-center w-[80%] inset-inline-start-auto"
        style={{ backgroundImage: `url(${config.imageURI}/w1280/${path})` }}
      />
      <div
        style={{
          background: "linear-gradient(to right, black, rgba(0, 0, 0, 0) 150%)",
        }}
        className="absolute inset-0"
      ></div>
      {children}
    </div>
  );
};

export default BgImage;
