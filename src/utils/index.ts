export const toSlug = (slug: string) =>
  slug.replace(/\s+/g, "-").toLowerCase() as string;
