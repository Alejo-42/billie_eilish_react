export type TargetType = 'album' | 'song' | 'ep' | 'site';

export interface Rating {
  id?: string;
  target_id: string;  
  target_type: TargetType; 
  display_name: string;
  comment: string;
  rating: number; 
  created_at?: string; 
}

export interface RatingFormProps {
  showForm: boolean;
  rating: number;
  name: string;
  comment: string;
  isSubmitting: boolean;
  setRating: (val: number) => void;
  setName: (val: string) => void;
  setComment: (val: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleStarClick: (val: number) => void;
}

export interface RatingProps {
  rating: number;
  setRating: (val: number) => void;
}