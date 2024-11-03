import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IBookingTime } from "../interface/BookingSlot";
import { IMovie } from "../interface/movie";
import dayjs from "dayjs";
import { nearestTimeSlot } from "../config";
import { RootState } from "../store";
import { HTTPCodes } from "../axios";
import { BookingMode } from "../interface/Bookings";

export interface BookingSlot {
  isOpen: boolean;
  slot?: IBookingTime;
  movie?: IMovie;
  seats: number[];
  user?: string;
  dateTime: string;
  mode: BookingMode;
}

const initialState: BookingSlot = {
  isOpen: false,
  slot: nearestTimeSlot(),
  movie: undefined,
  user: undefined,
  seats: [],
  dateTime: dayjs().format(),
  mode: "read",
};

export const getBookedMovieById = createAsyncThunk<
  BookingSlot,
  { id: string; mode: BookingMode },
  { state: RootState }
>(
  "bookingSlot/getBookedMovieById",
  async ({ id, mode }, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const bookings =
        mode === "delete" ? state.bookings.data : state.bookings.archived;
      const bookingData = bookings?.find((x) => x.id === id);
      return {
        isOpen: true,
        slot: bookingData?.slot,
        movie: bookingData?.movie,
        seats: bookingData?.seats || [],
        user: bookingData?.user,
        dateTime: bookingData?.dateTime || dayjs().format(),
        mode: mode,
      };
    } catch (error) {
      return rejectWithValue(HTTPCodes[500]);
    }
  }
);

export const bookingSlotSlice = createSlice({
  name: "bookingSlot",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(
        getBookedMovieById.fulfilled,
        (state, action: PayloadAction<BookingSlot>) => {
          state.isOpen = action.payload.isOpen;
          state.movie = action.payload.movie;
          state.user = action.payload.user;
          state.mode = action.payload.mode;
          state.seats = action.payload.seats;
          state.slot = action.payload.slot;
          state.dateTime = action.payload.dateTime;
        }
      )
      .addCase(getBookedMovieById.rejected, (state) => {
        state.isOpen = false;
        state.movie = undefined;
        state.seats = [];
        state.slot = nearestTimeSlot();
        state.user = undefined;
        state.dateTime = dayjs().format();
      });
  },
  reducers: {
    setBookingSlotModal: (
      state,
      action: PayloadAction<{
        isOpen: boolean;
        movie?: IMovie;
        user?: string;
        mode?: BookingMode;
      }>
    ) => {
      state.isOpen = action.payload.isOpen;
      state.movie = action.payload.movie;
      state.user = action.payload.user;
      state.mode = action.payload.mode || "read";
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
