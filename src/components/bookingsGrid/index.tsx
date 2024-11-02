import { FC } from "react";
import IBookingsGridProps from "./IBookingsGrid.props";
import dayjs from "dayjs";

const BookingsGridItem: FC<{ name?: string; value?: string }> = ({
  name,
  value,
}) => {
  return (
    <>
      <div className="col-span-4">
        <p className={`text-gray-100 text-base`}>{name}:</p>
      </div>
      <div className="col-span-8">
        <p className={`text-gray-100 text-base`}>{value}</p>
      </div>
    </>
  );
};

const BookingsGrid: FC<IBookingsGridProps> = ({ booking }) => {
  console.log("ASdasdasd", booking);
  return (
    <div className="grid grid-cols-12 gap-0 w-full mt-3">
      <BookingsGridItem name={"Slot"} value={booking.slot?.time} />
      <BookingsGridItem
        name={"Seat no"}
        value={(booking.seats || [])
          .slice()
          .sort((a, b) => a - b)
          .join(", ")}
      />
      <BookingsGridItem
        name={"Date"}
        value={dayjs(booking.date).format("DD/MM/YYYY")}
      />
      <BookingsGridItem name={"User"} value={booking.user} />
    </div>
  );
};

export default BookingsGrid;
