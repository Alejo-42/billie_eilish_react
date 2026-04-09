export interface Album {
    id: number;
    title: string;
    release_year: string;
    cover_url: string;
    description: string;
}

export interface AlbumSectProps {
    title: string;
    data: Album[];
}

export interface AlbumCardProps {
  id: string | number;
  title: string;
  cover_url: string;
  release_year: string | number;
}