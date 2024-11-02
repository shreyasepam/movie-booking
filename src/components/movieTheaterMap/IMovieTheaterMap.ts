export interface IMovieSeat {
    name: string;
    price: number;
    occupied: number[];
  }

  export default interface IMovieTheaterMapProps{}
  
  export interface IMoviesMapProps {
    movie: IMovieSeat;
    onChange: (movie: IMovieSeat) => void;
  }
  
  export interface ICinemaProps {
    occupied: number[];
  }

  export const seats: number[] = Array.from({ length: 4 * 8 }, (_, i) => i);