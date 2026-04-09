import type { RatingFormProps } from '../../types/rating'
import { RatingStars } from './RatingStars';
import styles from './styles/FormRating.module.css';

export const FormRating = ({ 
  showForm, 
  rating, 
  name, 
  comment, 
  isSubmitting, 
  setName, 
  setComment, 
  handleSubmit, 
  handleStarClick }: RatingFormProps) => {
  return (
    <>
      <div className={styles.contentRating}>
        <p>How would you rate this project?</p>
        <RatingStars rating={rating} setRating={handleStarClick} />
        {showForm && (
          <form className={styles.ratingForm} onSubmit={handleSubmit}>
            <input 
              title="UserName" 
              placeholder="Name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
            <textarea 
              name="opinion" 
              placeholder="Opinion/Review" 
              value={comment} 
              onChange={(e) => setComment(e.target.value)} 
            />
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Submit Rating"}
            </button>
          </form>
        )}
      </div>    
    </>
  )
}