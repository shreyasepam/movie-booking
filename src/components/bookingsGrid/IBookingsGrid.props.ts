export interface IBookingTime {
    id:string,
    cost: number,
    time: string
}

export interface IMovie {
    adult: boolean;
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface IMovieAPIResponse {
    page?: number;
    results?: IMovie[];
    total_pages?: number;
    total_results?: number;
}

export interface IBookingsData {
  id?: string;
  movie?: IMovie;
  slot?: IBookingTime;
  seats: number[];
  dateTime: string;
  user?: string;
}

export type BookingMode = "new" | "delete" | "read";



export default interface IBookingsGridProps {
  booking: IBookingsData;
  onHandleClick: (id: string) => void;
}
