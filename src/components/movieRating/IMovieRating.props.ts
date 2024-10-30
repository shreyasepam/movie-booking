export type MovieRatingClasses = {
  footer?: string;
  svgWrapper?: string;
  svg?: string;
  rating?: string;
  divider?: string;
  language?: string;
};

export default interface IMovieRatingProps {
  rating?: number | null;
  language?: string | null;
  classes?: MovieRatingClasses;
}
