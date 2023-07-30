export interface MovieListProps {
    bgColor: string;
    title: string;
    favorite: string;
    onMovieClick: (movieId: number) => void;
}
