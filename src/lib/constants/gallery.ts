// Replace placeholder images with real before/after job photos before launch
import heroImg from "@/assets/hero-team.jpg";
import aboutImg from "@/assets/about-team.jpg";
import whyImg from "@/assets/why-choose.jpg";

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

export const GALLERY_PROJECTS: GalleryProject[] = [
  {
    id: 1,
    title: "Corporate Office - Colombo 03",
    category: "Commercial",
    location: "Colombo",
    before: heroImg,
    after: aboutImg,
    desc: "Full office deep-clean for a 50-person workspace, including kitchen, bathrooms and open-plan floor.",
  },
  {
    id: 2,
    title: "3-Bedroom Villa",
    category: "Residential",
    location: "Nugegoda",
    before: aboutImg,
    after: whyImg,
    desc: "Move-out clean returning the property to pristine condition ahead of new tenants.",
  },
  {
    id: 3,
    title: "Restaurant Post-Renovation",
    category: "Post-Renovation",
    location: "Kandy",
    before: whyImg,
    after: heroImg,
    desc: "Construction dust, paint residue and debris cleared from a newly renovated restaurant.",
  },
  {
    id: 4,
    title: "Wedding Reception Venue",
    category: "Events",
    location: "Colombo",
    before: heroImg,
    after: whyImg,
    desc: "Post-event cleanup for a 300-guest wedding, completed overnight and ready by morning.",
  },
  {
    id: 5,
    title: "Bank Branch - Gampaha",
    category: "Commercial",
    location: "Gampaha",
    before: aboutImg,
    after: heroImg,
    desc: "Ongoing weekly maintenance clean for a busy bank branch with high foot traffic.",
  },
  {
    id: 6,
    title: "Luxury Apartment",
    category: "Residential",
    location: "Colombo 07",
    before: whyImg,
    after: aboutImg,
    desc: "Deep clean of a luxury apartment including marble floors, fitted kitchen and en-suite bathrooms.",
  },
];
