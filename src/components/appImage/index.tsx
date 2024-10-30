import { FC } from "react";
import IAppImageProps from "./iAppImage.props";
import getConfig from "../../envConfig";

const AppImage: FC<IAppImageProps> = ({ path, className }) => {
  const config = getConfig();
  return <img src={`${config.imageURI}/w500/${path}`} className={className} />;
};

export default AppImage;
