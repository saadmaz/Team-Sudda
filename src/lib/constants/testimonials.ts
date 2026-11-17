export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

/**
 * Genuine customer reviews only, each with the customer's permission to publish
 * their name (or an approved identifier). The section stays hidden while empty.
 */
export const TESTIMONIALS: Testimonial[] = [];
