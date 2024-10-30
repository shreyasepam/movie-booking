export default interface IMovieCardProps {
  classes?: {
    root?: string;
    image?: string;
    title?: string;
    footer?: string;
    svgWrapper?: string;
    svg?: string;
    rating?: string;
    divider?: string;
    language?: string;
  };
  id?: number;
  poster?: string | null;
  title?: string | null;
  rating?: number | null;
  language?: string;
  onCardClick?: (id?: number) => void;
}
