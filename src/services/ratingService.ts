import { supabase } from "../lib/supabase";
import type { Rating } from "../types/rating";

export const ratingService = {
    async submitRating(ratingData: Rating) {
        const { data, error } = await supabase.from('public_ratings').insert([ratingData]);
        if (error) throw error;
        return data;
    }
}