import styles from './styles/BioSect.module.css';
import type { BioSectionProps } from '../../types/biography';

export const BioSection = ({ content, photo_name, index, id }: BioSectionProps) => {
  const isEven = index % 2 === 0;
  const sectionClass = isEven ? styles.sectionLeft : styles.sectionRight;

  return (
    <section className={sectionClass}>
      <div className={styles.imageColumn}>
        <img src={photo_name} alt={`Billie Eilish - ${id}`} className={styles.bioImage}/>
      </div>
      <div className={styles.textColumn}>
        <p className={styles.text}>{content}</p>
      </div>
    </section>
  );
};