import { supabase } from '../lib/supabase'
import type { SocialMediaLink } from '../types/socials'

export const socialService = async (): Promise<SocialMediaLink[]> =>{ 
  const {data, error} = await supabase.from('my_social_media').select('*');

  if (error) {
    console.error("Error al obtener las redes sociales:", error);
    return [];
  }
  return data || [];
}