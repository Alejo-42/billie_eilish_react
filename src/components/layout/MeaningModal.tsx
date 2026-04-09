import type { MeaningModalProps } from '../../types/meaningModal'
import styles from './styles/MeaningModal.module.css'

export const MeaningModal = ({ isOpen, onClose, title, meaning, bgClass }: MeaningModalProps) => {
  if (!isOpen) return null;
  
  return (
    <div className={`${styles.overlay} ${bgClass ? styles[bgClass] : ''}`} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.closeBtn}>
          <button className={styles.btn} onClick={onClose}>&times;</button>
        </div>
        <div className={styles.contentInfo}>
          <div className={styles.contentTitle}>
            <h2>Meaning of <span>'{title}'</span></h2>
          </div>
          <div className={styles.content}>
            <p>{meaning}</p>
          </div>
        </div>
      </div>
    </div>
  );
}