import { IBookingTime } from "./BookingSlot";
import { IMovie } from "./movie";

export interface IBookingsData {
  id?: string;
  movie?: IMovie;
  slot?: IBookingTime;
  seats: number[];
  dateTime: string;
  user?: string;
}

export type BookingMode = "new" | "delete" | "read";
