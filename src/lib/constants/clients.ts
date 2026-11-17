export interface Client {
  name: string;
  sector: string;
  url?: string;
}

/**
 * Organisations Team Sudda cleans for. Add a client only with their written
 * permission to be named. Never list a name that is not a current or past client.
 */
export const CLIENTS: Client[] = [
  { name: "Tank Sudda", sector: "Water-tank & sump cleaning", url: "https://tanksudda.com" },
  { name: "STOPWASH", sector: "Vehicle care", url: "https://stopwash.lk" },
  { name: "Polish Station", sector: "Automotive detailing" },
];
