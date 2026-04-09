import { supabase } from '../lib/supabase'
import type { BiographyItem } from '../types/biography';

export const getIcon = async () => {
  const { data, error } = await supabase.from('be_info').select('link').eq('name','blohsh').single()
    if (error) {
        console.error("Error al obtener el logo:", error);
        return null;
    }
    return data.link;
}

export const getBiography = async (): Promise<BiographyItem[]> => {
    const { data, error } = await supabase.from('be_biography').select('*').order('id', { ascending: true });

    if (error) {
        console.error("Error cargando biografía:", error);
        return [];
    }
    return data || [];
};

export const getArtistSocialMedia = async () => {
    const { data, error } = await supabase.from('be_info').select('*').not('icon_class', 'is', null);

    if (error) {
        console.error("Error al obtener las redes sociales:", error);
        return [];
    }
    return data || [];
};