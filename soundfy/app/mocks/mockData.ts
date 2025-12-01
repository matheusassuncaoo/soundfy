import { Playlist, Song } from "../types";

const mockSongs: Song[] = [
  {
    id: "1",
    title: "Midnight",
    artist: "The Weeknd",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
    duration: 240,
  },
  {
    id: "2",
    title: "Blinding Lights",
    artist: "The Weeknd",
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop",
    duration: 200,
  },
  {
    id: "3",
    title: "Levitating",
    artist: "Dua Lipa",
    image:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop",
    duration: 203,
  },
  {
    id: "4",
    title: "Good 4 U",
    artist: "Olivia Rodrigo",
    image:
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300&h=300&fit=crop",
    duration: 178,
  },
  {
    id: "5",
    title: "As It Was",
    artist: "Harry Styles",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=300&h=300&fit=crop",
    duration: 172,
  },
  {
    id: "6",
    title: "Anti-Hero",
    artist: "Taylor Swift",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
    duration: 229,
  },
];

export const mockPlaylists: Playlist[] = [
  {
    id: "p1",
    title: "Descobertas da Semana",
    description: "Novas músicas selecionadas para você",
    image:
      "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=300&h=300&fit=crop",
    songs: mockSongs.slice(0, 3),
  },
  {
    id: "p2",
    title: "Hits Globais",
    description: "As melhores músicas do momento",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=300&h=300&fit=crop",
    songs: mockSongs.slice(3, 6),
  },
  {
    id: "p3",
    title: "Relaxe e Desconecte",
    description: "Múscas para acalmar o dia",
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop",
    songs: mockSongs,
  },
];

export const mockSectionsData = [
  {
    id: "recents",
    title: "Recentemente Tocadas",
    items: mockSongs.slice(0, 4),
  },
  {
    id: "featured",
    title: "Seleção do Momento",
    items: mockPlaylists,
  },
  {
    id: "trending",
    title: "Em Alta",
    items: mockSongs.slice(2, 6),
  },
];
