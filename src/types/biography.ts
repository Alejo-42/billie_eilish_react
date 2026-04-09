export interface BiographyItem{
  id: number;
  content: string;
  photo_name: string;
}
export interface BioSectionProps {
  content: string;
  photo_name: string;
  index: number;
  id: number;
}