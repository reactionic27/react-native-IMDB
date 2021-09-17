export type MovieType = {
  id: string;
  title: string;
  media_type?: string;
  backdrop_path?: string;
  original_language?: string;
  original_title: string;
  overview: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  video?: boolean;
  adult?: boolean;
  vote_average?: number;
  vote_count?: number;
  original_name?: string;
};

export type MovieState = {
  movies: MovieType[];
};

export type RootState = {
  movieState: MovieState;
};

export type PayloadType = {
  type: string;
  payload: any;
};
