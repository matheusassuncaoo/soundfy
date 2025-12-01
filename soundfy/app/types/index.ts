export interface Song {
  id: string;
  title: string;
  artist: string;
  image: string;
  duration: number;
}

export interface Playlist {
  id: string;
  title: string;
  description: string;
  image: string;
  songs: Song[];
}

export interface Section {
  id: string;
  title: string;
  description?: string;
  items: Song[] | Playlist[];
}
