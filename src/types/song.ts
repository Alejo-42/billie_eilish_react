export interface Song {
  id: number;
  album_id: number; 
  title: string;
  duration_seconds?: number;   
  audio_url: string; 
  track_number: number; 
  release_year: number;
  meaning: string; 
  spotify_url: string; 
  youtube_url: string; 
  cover_url: string; 
  song_artists: {
    artists: {
      name: string;
    };
  }[];
}
