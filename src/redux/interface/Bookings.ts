import { IBookingTime } from "./BookingSlot";
import { IMovie } from "./movie";

export interface IBookingsData {
  movie?: IMovie;
  slot?: IBookingTime;
  seats: number[];
  date: string;
  user?: string;
}
