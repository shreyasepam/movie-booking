import { IBookingTime } from "./BookingSlot";
import { IMovie } from "./movie";

export interface IBookingsData {
  id: string;
  movie?: IMovie;
  slot?: IBookingTime;
  seats: number[];
  date: string;
  user?: string;
}
