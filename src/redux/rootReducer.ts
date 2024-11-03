import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import session from "redux-persist/lib/storage/session";

import LoginReducer from "./slice/loginSlice";
import MoviesReducer from "./slice/moviesSlice";
import MovieByIdReducer from "./slice/movieByIdSlice";
import MovieMetaReducer from "./slice/movieMetaSlice";
import BookingSlotReducer from "./slice/bookingSlotSlice";
import BookingsReducer from "./slice/bookingsSlice";

const VERSION = "v1";

const localStorage = (key: string): PersistConfig<any> => ({
  key: `${VERSION}-${key}`,
  storage: storage,
});

// const sessionStorage = (key: string): PersistConfig<any> => ({
//   key: `${VERSION}-${key}`,
//   storage: session,
// });

export const rootReducer = combineReducers({
  login: persistReducer(localStorage("login"), LoginReducer),
  movies: MoviesReducer,
  movie: MovieByIdReducer,
  movieMeta: MovieMetaReducer,
  bookingSlot: BookingSlotReducer,
  bookings: persistReducer(localStorage("bookings"), BookingsReducer),
});
