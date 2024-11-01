import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IBookingTime } from "../interface/BookingSlot";
import { IMovie } from "../interface/movie";
import dayjs from "dayjs";

export interface BookingSlot {
  isOpen: boolean;
  slot?: IBookingTime;
  movie?: IMovie;
  seats: number[];
  user?: string;
  date: string;
}

let now = dayjs();

const initialState: BookingSlot = {
  isOpen: false,
  slot: undefined,
  movie: undefined,
  user: undefined,
  seats: [],
  date: now.format(),
};

export const bookingSlotSlice = createSlice({
  name: "bookingSlot",
  initialState,
  reducers: {
    setBookingSlotModal: (
      state,
      action: PayloadAction<{ isOpen: boolean; movie?: IMovie; user?: string }>
    ) => {
      state.isOpen = action.payload.isOpen;
      state.movie = action.payload.movie;
      state.user = action.payload.user;
    },
    setSlot: (state, action: PayloadAction<IBookingTime>) => {
      state.slot = action.payload;
    },
    setSeats: (state, action: PayloadAction<number[]>) => {
      state.seats = action.payload;
    },
    cleatBookingSlot: (state) => {
      state.isOpen = false;
      state.movie = undefined;
      state.seats = [];
      state.slot = undefined;
      state.user = undefined;
    },
  },
});

export const { setBookingSlotModal, setSlot, setSeats, cleatBookingSlot } =
  bookingSlotSlice.actions;

export default bookingSlotSlice.reducer;
