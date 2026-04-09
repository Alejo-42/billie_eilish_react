export interface MeaningModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  meaning: string;
  bgClass: string; 
}