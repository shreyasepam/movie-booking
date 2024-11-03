import { IBookingsData } from "../../redux/interface/Bookings";

export default interface IBookingSectionProps {
    title:string;
    data?:IBookingsData[]
}