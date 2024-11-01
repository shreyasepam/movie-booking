import { IBookingTime } from "./interface/BookingSlot";

export function movieObjectMapper<T extends Record<string, any>>(
  data: T[],
  key: keyof T,
  value: keyof T
): Record<string, T[keyof T]> {
  const obj: Record<string, T[keyof T]> = {};

  data.forEach((x) => {
    if (x[key] !== undefined && x[value] !== undefined) {
      obj[String(x[key])] = x[value];
    }
  });

  return obj;
}

export const movieTimeSlot: IBookingTime[] = [
  {
    id: "9AM",
    time: "9:00 AM",
    cost: 300,
  },
  {
    id: "1PM",
    time: "1:00 PM",
    cost: 300,
  },
  {
    id: "5PM",
    time: "5:00 PM",
    cost: 400,
  },
  {
    id: "11PM",
    time: "11:00 PM",
    cost: 350,
  },
];
