import { MovieRatingClasses } from "../movieRating/IMovieRating.props";

 export type MovieCardClasses = {
    root?: string;
    image?: string;
    title?: string;
}

export default interface IMovieCardProps {
  classes?: MovieRatingClasses & MovieCardClasses;
  id?: number;
  poster?: string | null;
  title?: string | null;
  rating?: number | null;
  language?: string;
  onCardClick?: (id: number) => void;
}
