import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IBookingsData } from "../interface/Bookings";
import dayjs from "dayjs";
import { validDateTime } from "../config";
import Bookings from "../../dummy/bookings.json"

export interface BookingsState {
  data?: IBookingsData[];
  archived?: IBookingsData[];
}

const initialState: BookingsState = {
  data: Bookings as IBookingsData[],
  archived: undefined
};

export const bookingsSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {
    setMovieBooking: (state, action: PayloadAction<IBookingsData>) => {
      state.data = [
        ...(state.data || []),
        { ...action.payload, id: dayjs().format() },
      ];
    },
    getBookings: (state) => {
      state.archived = [
        ...(state.archived || []),
        ...(state.data || []).filter((booking) =>
          validDateTime(booking.dateTime, booking.slot?.time || "","isBefore")
        ),
      ];
      state.data = (state.data || []).filter((booking) =>
        validDateTime(booking.dateTime, booking.slot?.time || "","isAfter")
      );
    },
    deleteMovieBooking: (state, action: PayloadAction<string | undefined>) => {
      state.data = state.data?.filter(
        (booking) => booking.id === action.payload
      );
    },
    clearBookings: (state) => {
      state.data = [];
    },
  },
});

export const {
  setMovieBooking,
  getBookings,
  deleteMovieBooking,
  clearBookings,
} = bookingsSlice.actions;

export default bookingsSlice.reducer;
