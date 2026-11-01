// Photos for the carousel on the Coaches page. Files live in public/photos/ (1600px webp + 800px webp).
// Add, remove or reorder entries here. `alt` describes the photo for screen readers and search.
export type Photo = { src: string; small: string; alt: string; caption?: string; w: number; h: number };

export const gallery: Photo[] = [];
