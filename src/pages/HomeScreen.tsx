import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FormRating } from "../components/layout/FormRating";
import { useRatingForm } from "../hooks/useRatingForm";
import styles from "./styles/HomeScreen.module.css"

export const HomeScreen = () => {
  const { 
    rating, 
    setRating, 
    name, 
    setName, 
    comment, 
    setComment, 
    handleSubmit, 
    isSubmitting 
  } = useRatingForm('main_page', 'site');

  const [showForm, setShowForm] = useState(false);

  const handleStarClick = (val: number) => {
    setRating(val);
    if (!showForm) setShowForm(true);
  };
  
  return (
    <>
    <div className={styles.contentInfo}>  
      <h1>Billie Eilish</h1>
      <p>This project was developed as a centerpiece of my professional portfolio, merging my passion for web development with Billie Eilish's unique aesthetic. Built as a technical exploration using React and Supabase, it's designed to offer an immersive experience for fans. I hope you enjoy the result as much as I enjoyed creating it!</p>
      <p>To know more about me and my work, feel free to explore my portfolio! </p>
      <a title="Alejo Rosse on GitHub" href="https://github.com/Alejo-42" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /> View portfolio</a>
      <p>Enjoy!</p>
    </div>
    <FormRating 
      showForm={showForm}
      rating={rating}
      name={name}
      comment={comment}
      isSubmitting={isSubmitting}
      setRating={setRating}
      setName={setName}
      setComment={setComment}
      handleSubmit={handleSubmit}
      handleStarClick={handleStarClick}/>
    </>
  )
}