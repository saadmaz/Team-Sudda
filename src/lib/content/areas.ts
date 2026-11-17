export interface Area {
  slug: string;
  name: string;
  /** Neighbourhoods or postcodes to mention on the page. */
  covers: string[];
}

/**
 * Core service area. Each entry gets its own page at /areas/:slug.
 * Add an area only when the team can reliably serve it.
 */
export const AREAS: Area[] = [
  {
    slug: "colombo",
    name: "Colombo City",
    covers: [
      "Colombo 01 Fort",
      "Colombo 02 Slave Island",
      "Colombo 03 Kollupitiya",
      "Colombo 04 Bambalapitiya",
      "Colombo 05 Havelock Town",
      "Colombo 06 Wellawatte",
      "Colombo 07 Cinnamon Gardens",
      "Colombo 08 Borella",
      "Colombo 09 Dematagoda",
      "Colombo 10 Maradana",
      "Colombo 11 to 15",
    ],
  },
  {
    slug: "dehiwala-mount-lavinia",
    name: "Dehiwala & Mount Lavinia",
    covers: ["Dehiwala", "Mount Lavinia", "Ratmalana"],
  },
  { slug: "nugegoda", name: "Nugegoda", covers: ["Nugegoda", "Mirihana", "Nawala", "Delkanda"] },
  {
    slug: "rajagiriya",
    name: "Rajagiriya & Sri Jayawardenepura Kotte",
    covers: ["Rajagiriya", "Kotte", "Ethul Kotte", "Pita Kotte"],
  },
  {
    slug: "battaramulla",
    name: "Battaramulla",
    covers: ["Battaramulla", "Pelawatte", "Thalawathugoda"],
  },
  { slug: "maharagama", name: "Maharagama", covers: ["Maharagama", "Pannipitiya", "Kottawa"] },
  {
    slug: "wattala",
    name: "Wattala & Kelaniya",
    covers: ["Wattala", "Hendala", "Kelaniya", "Peliyagoda"],
  },
  { slug: "moratuwa", name: "Moratuwa", covers: ["Moratuwa", "Katubedda", "Angulana"] },
];

export const getArea = (slug: string | undefined) => AREAS.find((a) => a.slug === slug);
export const areaPath = (a: Pick<Area, "slug">) => `/areas/${a.slug}`;
