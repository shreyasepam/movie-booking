import dayjs from "dayjs";
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

export const validDateTime = (
  givenDate: string,
  givenTime: string,
  mode: "isBefore" | "isAfter"
): boolean => {
  const now = dayjs();
  const formattedGivenDate = dayjs(givenDate).format("YYYY-MM-DD");
  const givenDateTime = dayjs(
    `${formattedGivenDate} ${givenTime}`,
    "YYYY-MM-DD h:mm A"
  );
  return mode === "isBefore"
    ? givenDateTime.isBefore(now)
    : givenDateTime.isAfter(now) || givenDateTime.isSame(now);
};

export const validTime = (givenTime: string): boolean => {
  const now = dayjs();
  const formattedTodayDate = now.format("YYYY-MM-DD");
  const givenDateTime = dayjs(
    `${formattedTodayDate} ${givenTime}`,
    "YYYY-MM-DD h:mm A"
  );
  return now.isAfter(givenDateTime);
};

export const nearestTimeSlot = (): IBookingTime | undefined => {
  const now = dayjs();
  const today = now.format("YYYY-MM-DD");
  const futureSlots = movieTimeSlot?.slice().filter((slot) => {
    return dayjs(`${today} ${slot.time}`, "YYYY-MM-DD h:mm A").isAfter(now);
  });

  if (futureSlots.length === 0) {
    return undefined;
  }

  futureSlots.sort((a, b) => {
    const timeA = dayjs(`${today} ${a.time}`, "YYYY-MM-DD h:mm A");
    const timeB = dayjs(`${today} ${b.time}`, "YYYY-MM-DD h:mm A");
    return timeA.diff(now) - timeB.diff(now);
  });

  return futureSlots[0];
};
