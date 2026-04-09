import { supabase } from "../lib/supabase";
import type { Album } from "../types/album";

export const getAlbums = async (): Promise<Album[]> => {
  const { data, error } = await supabase.from('albums').select('*').order('id', { ascending: true });
  if (error) {
    console.error('Error cargando albums:', error);
    return [];
  }
  return data || [];

}
export const getAlbumById = async (id: number): Promise<Album | null> => {
  const { data, error } = await supabase.from('albums').select('*').eq('id', id).single();
  if (error) {
    console.error('Error cargando album:', error);
    return null;
  }
  return data || null;
}