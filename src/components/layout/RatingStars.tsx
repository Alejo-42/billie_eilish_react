import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons";
import type { RatingProps } from "../../types/rating";
import styles from "./styles/RatingStars.module.css"

export const RatingStars = ({ rating = 0, setRating }: RatingProps) => {

  const [hover, setHover] = useState(0)

  return (
    <>
        <div className={styles.ratingSect}>
            {[1, 2, 3, 4, 5].map((star) => (
                <FontAwesomeIcon
                key={star}
                icon={faStar}
                className={(hover || rating) >= star ? styles.starActive : styles.starDefault}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
                onClick={() => setRating(star)}
                />
            ))}
        </div>
    </>
  )
}