import { FC } from "react";
import ModalWrapper from "../modal/ModalWrapper";
import { useAppSelector } from "../../redux/reduxHooks";
import DotLoader from "react-spinners/DotLoader";

const AppLoading: FC = () => {
  const moviesLoading = useAppSelector((state) => state.movies.loading);
  const movieLoading = useAppSelector((state) => state.movie.loading);

  return (
    <ModalWrapper
      title="loader"
      isOpen={moviesLoading || movieLoading}
      isLoader
    >
      <DotLoader size={80} color="#010F1D" />
    </ModalWrapper>
  );
};

export default AppLoading;
