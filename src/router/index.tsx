import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movies from "../screens/movies";
import MovieDetails from "../screens/movieDetails";
import Bookings from "../screens/bookings";
import NotFound from "../screens/notFound";
import Header from "../components/header";
import AppContainer from "../components/appContainer";
import { useEffect } from "react";
import { useAppDispatch } from "../redux/reduxHooks";
import { getMovieMeta } from "../redux/slice/movieMetaSlice";
import LoginModal from "../components/modal/loginModal";
import BookingModal from "../components/modal/bookingModal";
import AppToast from "../components/appToast";
import AppLoading from "../components/appLoading";
import ApiKey from "../screens/apiKey";

export default function AppRouter() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMovieMeta());
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-auto">
      <Router basename="/">
        <Header />
        <AppContainer>
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/home" element={<Movies />} />
            <Route path="/dashboard" element={<Movies />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/api-key" element={<ApiKey />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppContainer>
      </Router>
      <BookingModal />
      <LoginModal />
      <AppToast />
      <AppLoading />
    </div>
  );
}
