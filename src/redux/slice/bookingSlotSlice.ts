import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IBookingTime } from "../interface/BookingSlot";
import { IMovie } from "../interface/movie";
import dayjs from "dayjs";
import { nearestTimeSlot } from "../config";

export interface BookingSlot {
  isOpen: boolean;
  slot?: IBookingTime;
  movie?: IMovie;
  seats: number[];
  user?: string;
  date: string;
  isReadOnly?: boolean;
  occupied?:number[]
}

let now = dayjs();

const initialState: BookingSlot = {
  isOpen: false,
  slot: nearestTimeSlot(),
  movie: undefined,
  user: undefined,
  seats: [],
  date: now.format(),
  isReadOnly: false,
};

export const bookingSlotSlice = createSlice({
  name: "bookingSlot",
  initialState,
  reducers: {
    setBookingSlotModal: (
      state,
      action: PayloadAction<{
        isOpen: boolean;
        movie?: IMovie;
        user?: string;
        isReadOnly?: boolean;
      }>
    ) => {
      state.isOpen = action.payload.isOpen;
      state.movie = action.payload.movie;
      state.user = action.payload.user;
      state.isReadOnly = action.payload.isReadOnly;
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
      state.slot = nearestTimeSlot();
      state.user = undefined;
    },
  },
});

export const { setBookingSlotModal, setSlot, setSeats, cleatBookingSlot } =
  bookingSlotSlice.actions;

export default bookingSlotSlice.reducer;
