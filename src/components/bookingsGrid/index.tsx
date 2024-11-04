import { FC } from "react";
import IBookingsGridProps from "./IBookingsGrid.props";
import dayjs from "dayjs";
import AppImage from "../appImage";

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

const BookingsGrid: FC<IBookingsGridProps> = ({ booking, onHandleClick }) => {
  return (
    <div
      className="flex bg-blue-base p-2 rounded-md shadow-md cursor-pointer hover:shadow-2xl"
      onClick={() => onHandleClick(booking.id!)}
      key={booking.id}
    >
      <AppImage
        path={booking.movie?.poster_path || ""}
        className={`object-cover h-48 rounded-2xl hover:shadow-2xl`}
      />
      <div className="ml-4">
        <p className={`text-gray-100 font-semibold text-2xl`}>
          {booking.movie?.title}
        </p>
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
            value={dayjs(booking.dateTime).format("DD/MM/YYYY")}
          />
          <BookingsGridItem name={"User"} value={booking.user} />
        </div>
      </div>
    </div>
  );
};

export default BookingsGrid;
