import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movies from "../screens/movies";
import MovieDetails from "../screens/movieDetails";
import Bookings from "../screens/bookings";
import NotFound from "../screens/notFound";
import Header from "../components/header";
import AppContainer from "../components/appContainer";

export default function AppRouter() {
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppContainer>
      </Router>
    </div>
  );
}
