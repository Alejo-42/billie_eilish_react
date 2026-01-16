
export interface Album {
  id: number;
  title: string;
  cover_url: string;
  release_year: number;
  background_url: string;
}

export interface Song {
  id: number;
  album_id: number | null; 
  title: string;
  duration_seconds: number;
  audio_url: string;
  track_number: number;
  release_year: string;
  poster_url: string;
}

export interface SocialMedia {
  id: number;
  link: string;
  name: string;
  icon_class: string;
}

export interface SongDetails {
  meaning: string;
  spotify_url: string;
  youtube_url: string;
}