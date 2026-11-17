export type GalleryCategory = "Commercial" | "Residential" | "Post-Renovation" | "Events";

export interface GalleryProject {
  id: number;
  title: string;
  category: GalleryCategory;
  location: string;
  before: string;
  after: string;
  desc: string;
}

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  "Commercial",
  "Residential",
  "Post-Renovation",
  "Events",
];

/**
 * Real Team Sudda jobs only, with photos taken on site and the client's
 * permission. The gallery page and homepage preview stay hidden while empty.
 */
export const GALLERY_PROJECTS: GalleryProject[] = [];
