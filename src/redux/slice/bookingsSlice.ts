import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IBookingsData } from "../interface/Bookings";

export interface BookingsState {
  data?: IBookingsData[];
}

const initialState: BookingsState = {
  data: undefined,
};

export const bookingsSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {
    setMovieBooking: (state, action: PayloadAction<IBookingsData>) => {
      state.data = [...(state.data || []), action.payload];
    },
    clearBookings: (state) => {
      state.data = [];
    },
  },
});

export const { setMovieBooking, clearBookings } = bookingsSlice.actions;

export default bookingsSlice.reducer;
