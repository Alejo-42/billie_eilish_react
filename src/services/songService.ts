import { supabase } from "../lib/supabase";
import type { Song } from "../types/song";

export const getSongsByAlbumId = async (albumId: number, isSingle: boolean = false): Promise<Song[]> => {

  let query = supabase.from('songs').select(`*,song_artists(artists(name))`).eq('album_id', albumId);
  if (isSingle) {
    query = query.order('release_year', {ascending: false})
  } else {
    query = query.order('track_number', {ascending: true})
  }
  const {data, error} = await query
  if (error) {
    console.error('Ocurrio un error:', error);
    
  }
  return data || [];
}