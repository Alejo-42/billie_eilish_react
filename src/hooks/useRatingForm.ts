import { useState } from "react"
import { ratingService } from "../services/ratingService"
import type { Rating } from "../types/rating"

export const useRatingForm = (targetId: string, targetType: 'album' | 'song' | 'ep' | 'site') => {
    const [rating, setRating] = useState(0);
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            
            if (rating === 0) {
                alert("Please select a rating before submitting.");
                return;
            }

            setIsSubmitting(true);

            const ratingData: Rating = {
            target_id: targetId,
            target_type: targetType,   
            display_name: name,
            comment: comment,
            rating: rating
        };

        try {
            await ratingService.submitRating(ratingData);

            await fetch("https://formspree.io/f/mojpoqwz", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    Nombre: name,
                    Rating: rating,
                    Comentario: comment,
                    Tipo: targetType
                })
                });

            alert("¡Thanks for your rating!");
            setRating(0); setName(''); setComment('');
        } catch (error) {
            alert("There was an error submitting the rating.");
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    }
    return { rating, setRating, name, setName, comment, setComment, handleSubmit, isSubmitting };
}