import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IBookingsData } from "../interface/Bookings";
import dayjs from "dayjs";

export interface BookingsState {
  data?: IBookingsData[];
  archived?: IBookingsData[];
}

const initialState: BookingsState = {
  data: undefined,
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
    deleteMovieBooking:(state, action: PayloadAction<string|undefined>) => {
        state.data = state.data?.filter(booking => booking.id === action.payload);
    },
    clearBookings: (state) => {
      state.data = [];
    },
  },
});

export const { setMovieBooking, deleteMovieBooking, clearBookings } = bookingsSlice.actions;

export default bookingsSlice.reducer;
